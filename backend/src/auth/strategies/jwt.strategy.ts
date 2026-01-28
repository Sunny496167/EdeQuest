import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'secret',
        });
    }

    async validate(payload: any) {
        // Payload contains the decoded JWT claims (email, sub -> userId, roles)
        // Signature validation is implicitly done by passport-jwt.
        // Return the user object that will be attached to Request object.
        return {
            userId: payload.sub,
            email: payload.email,
            roles: payload.roles || []  // Include roles for authorization
        };
    }
}
