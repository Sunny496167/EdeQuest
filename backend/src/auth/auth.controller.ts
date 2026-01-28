import { Controller, Post, Body, UseGuards, Get, Req, Res, UnauthorizedException, Query, HttpCode, HttpStatus, Ip, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Public } from './decorators/public.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 attempts per minute
    @ApiOperation({ summary: 'Login with email and password' })
    @ApiResponse({ status: 200, description: 'Login successful, returns JWT access and refresh tokens' })
    @ApiResponse({ status: 401, description: 'Invalid credentials or account locked' })
    @ApiResponse({ status: 429, description: 'Too many requests' })
    async login(@Body() loginDto: LoginDto, @Req() req: Request) {
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');

        const user = await this.authService.validateUser(
            loginDto.email,
            loginDto.password,
            ipAddress,
            userAgent
        );

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.authService.login(user, ipAddress, userAgent);
    }

    @Public()
    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 signups per minute
    @ApiOperation({ summary: 'Register a new user account' })
    @ApiResponse({ status: 201, description: 'User registered successfully, verification email sent' })
    @ApiResponse({ status: 400, description: 'User already exists or validation failed' })
    @ApiResponse({ status: 429, description: 'Too many requests' })
    async signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Public()
    @Get('google')
    @UseGuards(AuthGuard('google'))
    @ApiOperation({ summary: 'Initiate Google OAuth login' })
    @ApiResponse({ status: 302, description: 'Redirects to Google OAuth consent screen' })
    async googleAuth(@Req() req) {
        // Initiates the Google OAuth flow
    }

    @Public()
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    @ApiOperation({ summary: 'Google OAuth callback endpoint' })
    @ApiResponse({ status: 200, description: 'Google login successful, returns JWT token' })
    async googleAuthRedirect(@Req() req, @Res() res) {
        // Handles the callback from Google
        const { user } = req;
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');
        const loginData = await this.authService.login(user, ipAddress, userAgent); // Generate JWT for the Google user

        // Redirect to frontend with token (or send JSON if handling via pop-up)
        // For now, let's just return the token in JSON or redirect to a frontend processing page
        // res.redirect(`http://localhost:3000/auth/success?token=${loginData.access_token}`);

        return res.json({
            message: 'Google Login Successful',
            user: loginData.user,
            accessToken: loginData.access_token,
            refreshToken: loginData.refresh_token
        });
    }

    @Public()
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Refresh access token using refresh token' })
    @ApiResponse({ status: 200, description: 'New access and refresh tokens generated' })
    @ApiResponse({ status: 401, description: 'Invalid or expired refresh token' })
    async refresh(@Body() refreshTokenDto: RefreshTokenDto, @Req() req: Request) {
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');

        return this.authService.refreshAccessToken(
            refreshTokenDto.refreshToken,
            ipAddress,
            userAgent
        );
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Logout and revoke refresh token' })
    @ApiResponse({ status: 200, description: 'Logged out successfully' })
    @ApiBearerAuth('JWT-auth')
    async logout(@Body() refreshTokenDto: RefreshTokenDto, @Req() req) {
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');
        const userId = req.user?.userId;

        await this.authService.revokeRefreshToken(
            refreshTokenDto.refreshToken,
            userId,
            ipAddress,
            userAgent
        );
        return { message: 'Logged out successfully' };
    }

    @Post('logout-all')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Logout from all devices (revoke all refresh tokens)' })
    @ApiResponse({ status: 200, description: 'Logged out from all devices' })
    @ApiBearerAuth('JWT-auth')
    async logoutAll(@Req() req) {
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');

        await this.authService.revokeAllUserTokens(req.user.userId, ipAddress, userAgent);
        return { message: 'Logged out from all devices' };
    }

    @Public()
    @Get('verify-email')
    @ApiOperation({ summary: 'Verify email address with token' })
    @ApiResponse({ status: 200, description: 'Email verified successfully' })
    @ApiResponse({ status: 400, description: 'Invalid or expired token' })
    async verifyEmail(@Query('token') token: string) {
        return this.authService.verifyEmail(token);
    }

    @Public()
    @Post('forgot-password')
    @Throttle({ default: { limit: 3, ttl: 300000 } }) // 3 attempts per 5 minutes
    @ApiOperation({ summary: 'Request password reset email' })
    @ApiResponse({ status: 200, description: 'If user exists, password reset email sent' })
    @ApiResponse({ status: 429, description: 'Too many requests' })
    async forgotPassword(@Body('email') email: string) {
        return this.authService.forgotPassword(email);
    }

    @Public()
    @Post('reset-password')
    @ApiOperation({ summary: 'Reset password with token' })
    @ApiResponse({ status: 200, description: 'Password reset successfully' })
    @ApiResponse({ status: 400, description: 'Invalid or expired token' })
    async resetPassword(@Body() body: { token: string, password: string }) {
        return this.authService.resetPassword(body.token, body);
    }

    // ==================== SESSION MANAGEMENT ====================

    @Get('sessions')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get all active sessions for current user',
        description: 'Returns list of all active login sessions across devices with device information, location, and last activity'
    })
    @ApiResponse({
        status: 200,
        description: 'Active sessions retrieved successfully',
        schema: {
            example: {
                sessions: [
                    {
                        id: '507f1f77bcf86cd799439011',
                        deviceName: 'Chrome on Windows 10',
                        browser: 'Chrome 120.0',
                        os: 'Windows 10',
                        ipAddress: '192.168.1.100',
                        location: 'San Francisco, CA',
                        createdAt: '2026-01-20T08:00:00Z',
                        lastUsedAt: '2026-01-28T10:30:00Z',
                        expiresAt: '2026-01-27T08:00:00Z',
                        isCurrent: true
                    },
                    {
                        id: '507f1f77bcf86cd799439012',
                        deviceName: 'Safari on iPhone',
                        browser: 'Safari 17.0',
                        os: 'iOS 17.2',
                        ipAddress: '192.168.1.101',
                        location: 'San Francisco, CA',
                        createdAt: '2026-01-25T14:00:00Z',
                        lastUsedAt: '2026-01-27T16:00:00Z',
                        expiresAt: '2026-02-01T14:00:00Z',
                        isCurrent: false
                    }
                ],
                total: 2
            }
        }
    })
    @ApiBearerAuth('JWT-auth')
    async getSessions(@Req() req) {
        const userId = req.user.userId;
        const sessions = await this.authService.getActiveSessions(userId);

        // TODO: Mark current session based on the current token
        // This would require comparing the current request's refresh token
        // For now, mark the most recently used session
        if (sessions.length > 0) {
            sessions[0].isCurrent = true;
        }

        return {
            sessions,
            total: sessions.length
        };
    }

    @Delete('sessions/:id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Revoke a specific session (logout from one device)',
        description: 'Revokes the refresh token for a specific session, logging out that device only'
    })
    @ApiResponse({ status: 200, description: 'Session revoked successfully' })
    @ApiResponse({ status: 404, description: 'Session not found' })
    @ApiBearerAuth('JWT-auth')
    async revokeSession(@Req() req, @Param('id') sessionId: string) {
        const userId = req.user.userId;
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');

        await this.authService.revokeSession(userId, sessionId, ipAddress, userAgent);

        return {
            message: 'Session revoked successfully',
            sessionId
        };
    }
}
