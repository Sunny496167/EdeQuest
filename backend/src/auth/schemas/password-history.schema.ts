import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PasswordHistoryDocument = PasswordHistory & Document;

/**
 * PasswordHistory schema for tracking password changes and preventing reuse.
 * Stores hashed passwords to ensure users don't reuse recent passwords.
 */
@Schema({ timestamps: true })
export class PasswordHistory {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
    userId: Types.ObjectId;

    @Prop({ required: true })
    passwordHash: string;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const PasswordHistorySchema = SchemaFactory.createForClass(PasswordHistory);

// Index for efficient queries by user
PasswordHistorySchema.index({ userId: 1, createdAt: -1 });

// TTL index - automatically delete password history older than 1 year
PasswordHistorySchema.index(
    { createdAt: 1 },
    { expireAfterSeconds: 365 * 24 * 60 * 60 } // 365 days
);
