import { Controller, Post, Body, UseGuards, Get, Req, Res, UnauthorizedException, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
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
    @ApiResponse({ status: 200, description: 'Login successful, returns JWT token' })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    @ApiResponse({ status: 429, description: 'Too many requests' })
    async login(@Body() loginDto: LoginDto) {
        // Ideally use LocalGuard (passport-local) but for simplicity using direct service call validation if needed
        // or assume input is validated user object if LocalGuard was used.
        // Here we'll do a simple lookup validation manual for standard JWT login
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.authService.login(user);
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
        const loginData = await this.authService.login(user); // Generate JWT for the Google user

        // Redirect to frontend with token (or send JSON if handling via pop-up)
        // For now, let's just return the token in JSON or redirect to a frontend processing page
        // res.redirect(`http://localhost:3000/auth/success?token=${loginData.access_token}`);

        return res.json({
            message: 'Google Login Successful',
            user: loginData.user,
            accessToken: loginData.access_token
        });
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
}
