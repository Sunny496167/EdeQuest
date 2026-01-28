import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AuditLogDocument = AuditLog & Document;

/**
 * Severity levels for audit events
 */
export enum AuditSeverity {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    CRITICAL = 'CRITICAL'
}

/**
 * Categories for different types of audit events
 */
export enum AuditCategory {
    AUTHENTICATION = 'AUTHENTICATION',
    AUTHORIZATION = 'AUTHORIZATION',
    USER_MANAGEMENT = 'USER_MANAGEMENT',
    PASSWORD_MANAGEMENT = 'PASSWORD_MANAGEMENT',
    SESSION_MANAGEMENT = 'SESSION_MANAGEMENT',
    SECURITY_SETTINGS = 'SECURITY_SETTINGS',
    SYSTEM = 'SYSTEM'
}

/**
 * Standardized action names for audit events
 */
export enum AuditAction {
    // Authentication
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED = 'LOGIN_FAILED',
    LOGOUT = 'LOGOUT',
    TOKEN_REFRESH = 'TOKEN_REFRESH',

    // Account Security
    ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
    ACCOUNT_UNLOCKED = 'ACCOUNT_UNLOCKED',
    FAILED_LOGIN_ATTEMPT = 'FAILED_LOGIN_ATTEMPT',

    // Password Management
    PASSWORD_CHANGED = 'PASSWORD_CHANGED',
    PASSWORD_RESET_REQUESTED = 'PASSWORD_RESET_REQUESTED',
    PASSWORD_RESET_COMPLETED = 'PASSWORD_RESET_COMPLETED',

    // User Management
    USER_CREATED = 'USER_CREATED',
    USER_UPDATED = 'USER_UPDATED',
    USER_DELETED = 'USER_DELETED',
    ROLE_CHANGED = 'ROLE_CHANGED',

    // Session Management
    SESSION_CREATED = 'SESSION_CREATED',
    SESSION_REVOKED = 'SESSION_REVOKED',
    ALL_SESSIONS_REVOKED = 'ALL_SESSIONS_REVOKED',

    // Security Settings
    TWO_FACTOR_ENABLED = 'TWO_FACTOR_ENABLED',
    TWO_FACTOR_DISABLED = 'TWO_FACTOR_DISABLED',
}

/**
 * AuditLog schema for tracking all security-related events.
 * Provides comprehensive audit trail for compliance and security investigations.
 */
@Schema({ timestamps: true })
export class AuditLog {
    @Prop({ type: Types.ObjectId, ref: 'User', index: true })
    userId?: Types.ObjectId;

    @Prop({ required: true, index: true, enum: Object.values(AuditAction) })
    action: string;

    @Prop({ required: true, index: true, enum: Object.values(AuditCategory) })
    category: string;

    @Prop({ required: true, enum: Object.values(AuditSeverity), default: AuditSeverity.INFO })
    severity: string;

    @Prop()
    ipAddress?: string;

    @Prop()
    userAgent?: string;

    @Prop({ type: Object })
    metadata?: Record<string, any>;

    @Prop({ required: true, default: () => new Date(), index: true })
    timestamp: Date;
}

export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);

// Indexes for efficient querying
AuditLogSchema.index({ userId: 1, timestamp: -1 });
AuditLogSchema.index({ action: 1, timestamp: -1 });
AuditLogSchema.index({ category: 1, timestamp: -1 });
AuditLogSchema.index({ severity: 1, timestamp: -1 });

// TTL index - automatically delete logs older than 90 days
AuditLogSchema.index(
    { timestamp: 1 },
    { expireAfterSeconds: 90 * 24 * 60 * 60 } // 90 days in seconds
);
