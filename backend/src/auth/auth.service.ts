import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private mailService: MailService,
    ) { }

    /**
     * Validates a user by email and password.
     */
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && user.password) {
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                const { password, ...result } = user.toObject();
                return result;
            }
        }
        return null;
    }

    /**
     * Generates a JWT token for a user.
     */
    async login(user: any) {
        if (!user.isVerified) {
            // Optional: allow login but restrict access, or block completely.
            // For this requirement, we'll block login if not verified.
            // Uncomment if you want to block unverified users:
            // throw new UnauthorizedException('Please verify your email first');
        }

        const payload = { email: user.email, sub: user._id, roles: user.roles };
        return {
            access_token: this.jwtService.sign(payload),
            user: { ...user, isVerified: user.isVerified, roles: user.roles },
        };
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
