import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    /**
     * Validates a user by email and password.
     * Internal use for local strategy (if implemented) or manual login.
     */
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && user.password) {
            // Compare hased password
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                // Return user without password
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
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    /**
     * Handles registration (optional, if separate from UsersService).
     * Hashes password before saving.
     */
    async register(createUserDto: CreateUserDto) {
        // Hash password if present (required for registration)
        if (!createUserDto.password) {
            throw new Error("Password is required for registration");
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

        return this.usersService.create({
            ...createUserDto,
            password: hashedPassword,
        });
    }

    /**
     * Validates or creates a user from Google profile.
     */
    async validateGoogleUser(profile: any) {
        const { emails, displayName, photos, id } = profile;
        const email = emails[0].value;

        // Ensure we await the result
        let user = await this.usersService.findByEmail(email);

        if (!user) {
            // Create new user if not exists
            console.log('Creating new user from Google profile');
            user = await this.usersService.create({
                email,
                name: displayName,
                googleId: id,
                // password: '', // No password for OAuth users
            } as any) as any; // Cast specifically to handle type mismatches if necessary
        }

        return user;
    }
}
