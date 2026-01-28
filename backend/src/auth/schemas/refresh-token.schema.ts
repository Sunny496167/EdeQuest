import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

/**
 * RefreshToken schema for managing refresh tokens.
 * Refresh tokens are long-lived tokens used to obtain new access tokens
 * without requiring the user to re-authenticate.
 * 
 * Features:
 * - Token rotation: Each refresh invalidates the previous token
 * - Revocation support: Tokens can be manually revoked for logout
 * - IP and User Agent tracking for security
 * - Automatic expiration (7 days default)
 */
@Schema({ timestamps: true })
export class RefreshToken {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
    userId: Types.ObjectId;

    @Prop({ required: true, unique: true, index: true })
    token: string;

    @Prop({ required: true, index: true })
    expiresAt: Date;

    @Prop({ default: false })
    revoked: boolean;

    @Prop()
    revokedAt?: Date;

    @Prop()
    ipAddress?: string;

    @Prop()
    userAgent?: string;

    @Prop()
    replacedByToken?: string; // For token rotation tracking
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);

// Index for automatic cleanup of expired tokens
RefreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
