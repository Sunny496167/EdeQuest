import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { MailService } from '../mail/mail.service';
import { RefreshToken, RefreshTokenDocument } from './schemas/refresh-token.schema';
import { AuditService } from '../audit/audit.service';
import { AuditAction, AuditCategory, AuditSeverity } from '../audit/schemas/audit-log.schema';

// Account lockout configuration
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes
const REFRESH_TOKEN_EXPIRY_DAYS = 7;

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private mailService: MailService,
        private configService: ConfigService,
        @InjectModel(RefreshToken.name) private refreshTokenModel: Model<RefreshTokenDocument>,
        private auditService: AuditService,
    ) { }

    /**
     * Validates a user by email and password with account lockout protection.
     */
    async validateUser(email: string, pass: string, ipAddress?: string, userAgent?: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            return null;
        }

        // Check if account is locked
        if (user.accountLockedUntil && user.accountLockedUntil > new Date()) {
            const minutesRemaining = Math.ceil((user.accountLockedUntil.getTime() - Date.now()) / 60000);
            throw new UnauthorizedException(
                `Account is locked due to too many failed login attempts. Please try again in ${minutesRemaining} minute(s).`
            );
        }

        // Validate password
        if (user.password) {
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                // Successful login - reset failed attempts and update login tracking
                user.failedLoginAttempts = 0;
                user.accountLockedUntil = undefined;
                user.lastLoginAt = new Date();
                user.lastLoginIp = ipAddress;
                user.lastLoginUserAgent = userAgent;
                await user.save();

                // Log successful login
                await this.auditService.logEvent({
                    userId: user._id.toString(),
                    action: AuditAction.LOGIN_SUCCESS,
                    category: AuditCategory.AUTHENTICATION,
                    severity: AuditSeverity.INFO,
                    ipAddress,
                    userAgent,
                    metadata: { email: user.email, loginMethod: 'password' }
                });

                const { password, ...result } = user.toObject();
                return result;
            }
        }

        // Failed login - increment attempts
        await this.handleFailedLogin(user, ipAddress, userAgent);
        return null;
    }

    /**
     * Handles failed login attempts and account lockout.
     */
    private async handleFailedLogin(user: any, ipAddress?: string, userAgent?: string): Promise<void> {
        user.failedLoginAttempts += 1;

        // Log failed attempt
        await this.auditService.logEvent({
            userId: user._id.toString(),
            action: AuditAction.FAILED_LOGIN_ATTEMPT,
            category: AuditCategory.AUTHENTICATION,
            severity: AuditSeverity.WARNING,
            ipAddress,
            userAgent,
            metadata: {
                email: user.email,
                failedAttempts: user.failedLoginAttempts,
                remainingAttempts: MAX_LOGIN_ATTEMPTS - user.failedLoginAttempts
            }
        });

        if (user.failedLoginAttempts >= MAX_LOGIN_ATTEMPTS) {
            user.accountLockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MS);
            await user.save();

            // Log account lockout
            await this.auditService.logEvent({
                userId: user._id.toString(),
                action: AuditAction.ACCOUNT_LOCKED,
                category: AuditCategory.AUTHENTICATION,
                severity: AuditSeverity.CRITICAL,
                ipAddress,
                userAgent,
                metadata: {
                    email: user.email,
                    failedAttempts: user.failedLoginAttempts,
                    lockedUntil: user.accountLockedUntil
                }
            });

            const minutesLocked = LOCKOUT_DURATION_MS / 60000;
            throw new UnauthorizedException(
                `Account locked due to ${MAX_LOGIN_ATTEMPTS} failed login attempts. Please try again in ${minutesLocked} minutes.`
            );
        }

        await user.save();
    }

    /**
     * Generates JWT access and refresh tokens for a user.
     */
    async login(user: any, ipAddress?: string, userAgent?: string) {
        if (!user.isVerified) {
            // Optional: allow login but restrict access, or block completely.
            // For this requirement, we'll block login if not verified.
            // Uncomment if you want to block unverified users:
            // throw new UnauthorizedException('Please verify your email first');
        }

        // Generate access token (short-lived)
        const payload = { email: user.email, sub: user._id, roles: user.roles };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '15m', // 15 minutes
        });

        // Generate refresh token (long-lived)
        const refreshToken = await this.generateRefreshToken(
            user._id,
            ipAddress,
            userAgent
        );

        return {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: 900, // 15 minutes in seconds
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                roles: user.roles,
                isVerified: user.isVerified
            },
        };
    }

    /**
     * Generates a new refresh token and stores it in the database.
     */
    private async generateRefreshToken(
        userId: string,
        ipAddress?: string,
        userAgent?: string
    ): Promise<string> {
        const token = crypto.randomBytes(64).toString('hex');
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_EXPIRY_DAYS);

        await this.refreshTokenModel.create({
            userId,
            token,
            expiresAt,
            ipAddress,
            userAgent,
        });

        return token;
    }

    /**
     * Validates a refresh token and generates a new access token.
     */
    async refreshAccessToken(refreshToken: string, ipAddress?: string, userAgent?: string) {
        const tokenDoc = await this.refreshTokenModel.findOne({
            token: refreshToken,
            revoked: false,
            expiresAt: { $gt: new Date() }
        });

        if (!tokenDoc) {
            throw new UnauthorizedException('Invalid or expired refresh token');
        }

        // Get user details
        const user = await this.usersService.findOne(tokenDoc.userId.toString());
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // Rotate refresh token for security
        const newRefreshToken = await this.generateRefreshToken(
            (user as any)._id.toString(),
            ipAddress,
            userAgent
        );

        // Revoke old refresh token
        tokenDoc.revoked = true;
        tokenDoc.revokedAt = new Date();
        tokenDoc.replacedByToken = newRefreshToken;
        await tokenDoc.save();

        // Generate new access token
        const payload = { email: user.email, sub: (user as any)._id, roles: user.roles };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '15m',
        });

        // Log token refresh
        await this.auditService.logEvent({
            userId: (user as any)._id.toString(),
            action: AuditAction.TOKEN_REFRESH,
            category: AuditCategory.AUTHENTICATION,
            severity: AuditSeverity.INFO,
            ipAddress,
            userAgent,
            metadata: { email: user.email }
        });

        return {
            access_token: accessToken,
            refresh_token: newRefreshToken,
            expires_in: 900,
        };
    }

    /**
     * Revokes a refresh token (for logout).
     */
    async revokeRefreshToken(refreshToken: string, userId?: string, ipAddress?: string, userAgent?: string): Promise<void> {
        const tokenDoc = await this.refreshTokenModel.findOne({ token: refreshToken });

        if (tokenDoc) {
            tokenDoc.revoked = true;
            tokenDoc.revokedAt = new Date();
            await tokenDoc.save();

            // Log logout event
            if (userId) {
                await this.auditService.logEvent({
                    userId,
                    action: AuditAction.LOGOUT,
                    category: AuditCategory.AUTHENTICATION,
                    severity: AuditSeverity.INFO,
                    ipAddress,
                    userAgent,
                    metadata: { sessionRevoked: true }
                });
            }
        }
    }

    /**
     * Revokes all refresh tokens for a user (logout from all devices).
     */
    async revokeAllUserTokens(userId: string, ipAddress?: string, userAgent?: string): Promise<void> {
        await this.refreshTokenModel.updateMany(
            { userId, revoked: false },
            { revoked: true, revokedAt: new Date() }
        );

        // Log logout from all devices
        await this.auditService.logEvent({
            userId,
            action: AuditAction.ALL_SESSIONS_REVOKED,
            category: AuditCategory.SESSION_MANAGEMENT,
            severity: AuditSeverity.WARNING,
            ipAddress,
            userAgent,
            metadata: { allSessionsRevoked: true }
        });
    }

    /**
     * Handles registration with email verification.
     */
    async register(createUserDto: CreateUserDto) {
        if (!createUserDto.password) {
            throw new Error("Password is required for registration");
        }
        const existingUser = await this.usersService.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new BadRequestException('User already exists');
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const verificationToken = crypto.randomBytes(32).toString('hex');

        const newUser = await this.usersService.create({
            ...createUserDto,
            password: hashedPassword,
        } as any); // Type assertion needed until CreateUserDto includes internal fields or create accepts Partial<User>

        // Update with verification token manually since create might strip unknown fields if strict
        // Or if we passed it in create(), it depends on schema. 
        // Best way: create then update, or pass to create if DTO allows.
        // Mongoose model constructor takes object, schema validation runs on save.
        // Let's update it to be sure.
        newUser.verificationToken = verificationToken;
        newUser.isVerified = false;
        await newUser.save();

        await this.mailService.sendUserConfirmation(newUser, verificationToken);

        return newUser;
    }

    /**
     * Verifies email using token.
     */
    async verifyEmail(token: string) {
        const user = await this.usersService.findByVerificationToken(token);
        if (!user) {
            throw new BadRequestException('Invalid verification token');
        }
        if (user.isVerified) {
            throw new BadRequestException('Email already verified');
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        await this.mailService.sendWelcomeEmail(user);

        return { message: 'Email verified successfully' };
    }

    async forgotPassword(email: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            // Should not reveal if user exists for security, but for UX usually we imply success
            return { message: 'If user exists, password reset email sent' };
        }

        const token = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
        await user.save();

        await this.mailService.sendPasswordResetEmail(user, token);

        return { message: 'Password reset email sent' };
    }

    async resetPassword(token: string, newInput: any) {
        const user = await this.usersService.findByResetPasswordToken(token);
        if (!user) {
            throw new BadRequestException('Invalid or expired password reset token');
        }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(newInput.password, salt);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        return { message: 'Password reset successfully' };
    }

    async validateGoogleUser(profile: any) {
        const { emails, displayName, photos, id } = profile;
        const email = emails[0].value;
        let user = await this.usersService.findByEmail(email);

        if (!user) {
            console.log('Creating new user from Google profile');
            user = await this.usersService.create({
                email,
                name: displayName,
                googleId: id,
                isVerified: true, // Google users are verified by default
                roles: ['user'],
            } as any) as any;
        }
        return user;
    }
}
