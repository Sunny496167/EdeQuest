import { Controller, Post, Body, UseGuards, Get, Req, Res, UnauthorizedException, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
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

    @Post('signup')
    async signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
        // Initiates the Google OAuth flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
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
    @Get('verify-email')
    async verifyEmail(@Query('token') token: string) {
        return this.authService.verifyEmail(token);
    }

    @Post('forgot-password')
    async forgotPassword(@Body('email') email: string) {
        return this.authService.forgotPassword(email);
    }

    @Post('reset-password')
    async resetPassword(@Body() body: { token: string, password: string }) {
        return this.authService.resetPassword(body.token, body);
    }
}
