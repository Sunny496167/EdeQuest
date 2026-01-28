import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RefreshTokenDocument = RefreshToken & Document;

/**
 * RefreshToken schema for managing refresh tokens and user sessions.
 * Refresh tokens are long-lived tokens used to obtain new access tokens
 * without requiring the user to re-authenticate.
 * 
 * Features:
 * - Token rotation: Each refresh invalidates the previous token
 * - Revocation support: Tokens can be manually revoked for logout
 * - Session tracking: Device name, browser, OS, location
 * - IP and User Agent tracking for security
 * - Last activity tracking for session management
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

    // Session Management Fields
    @Prop()
    deviceName?: string; // e.g., "Chrome on Windows 10"

    @Prop()
    browser?: string; // e.g., "Chrome 120.0"

    @Prop()
    os?: string; // e.g., "Windows 10"

    @Prop()
    location?: string; // e.g., "San Francisco, CA" (can be derived from IP)

    @Prop({ type: Date })
    lastUsedAt?: Date; // Updated when token is used to refresh
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);

// Index for automatic cleanup of expired tokens
RefreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Index for efficient session queries
RefreshTokenSchema.index({ userId: 1, revoked: 1, expiresAt: 1 });
