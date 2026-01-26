import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private transporter;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('SMTP_HOST'),
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: this.configService.get<string>('SMTP_USER'),
                pass: this.configService.get<string>('SMTP_PASS'),
            },
        });
    }

    async sendUserConfirmation(user: any, token: string) {
        const url = `${this.configService.get<string>('FRONTEND_URL')}/verify-email?token=${token}`;

        await this.transporter.sendMail({
            from: '"No Reply" <' + this.configService.get<string>('MAIL_FROM') + '>',
            to: user.email,
            subject: 'Welcome to EdeQuest! Confirm your Email',
            html: `
        <h2>Welcome to EdeQuest!</h2>
        <p>Please click the link below to confirm your email address and activate your account:</p>
        <p><a href="${url}">Confirm Email</a></p>
        <p>If you did not request this email, you can safely ignore it.</p>
      `,
        });
    }

    async sendWelcomeEmail(user: any) {
        await this.transporter.sendMail({
            from: '"No Reply" <' + this.configService.get<string>('MAIL_FROM') + '>',
            to: user.email,
            subject: 'Welcome to EdeQuest!',
            html: `
        <h2>Hello ${user.name || 'User'},</h2>
        <p>Thank you for verifying your email. Your account is now active!</p>
        <p>We are excited to have you on board.</p>
      `,
        });
    }

    async sendPasswordResetEmail(user: any, token: string) {
        const url = `${this.configService.get<string>('FRONTEND_URL')}/reset-password?token=${token}`;

        await this.transporter.sendMail({
            from: '"No Reply" <' + this.configService.get<string>('MAIL_FROM') + '>',
            to: user.email,
            subject: 'Reset Password',
            html: `
        <h2>Password Reset Request</h2>
        <p>You requested a password reset. Please click the link below to reset your password:</p>
        <p><a href="${url}">Reset Password</a></p>
        <p>This link will expire in 1 hour.</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
        });
    }
}
