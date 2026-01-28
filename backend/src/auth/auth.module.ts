import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { MailModule } from '../mail/mail.module';
import { AuditModule } from '../audit/audit.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { RefreshToken, RefreshTokenSchema } from './schemas/refresh-token.schema';

@Module({
    imports: [
        UsersModule, // Import UsersModule to access UsersService
        MailModule,
        AuditModule, // Import AuditModule for audit logging
        PassportModule,
        // Import RefreshToken schema
        MongooseModule.forFeature([
            { name: RefreshToken.name, schema: RefreshTokenSchema }
        ]),
        // Configure JwtModule asynchronously to access ConfigService
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '60m' }, // Token expiration time
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        GoogleStrategy,
        RolesGuard, // Add RolesGuard as a provider
        // Global JWT Guard - makes all routes protected by default
        // Routes can be made public using @Public() decorator
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    exports: [AuthService, RolesGuard],
})
export class AuthModule { }
