import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditLog, AuditLogDocument, AuditAction, AuditCategory, AuditSeverity } from './schemas/audit-log.schema';

export interface AuditLogOptions {
    userId?: string;
    action: AuditAction;
    category: AuditCategory;
    severity?: AuditSeverity;
    ipAddress?: string;
    userAgent?: string;
    metadata?: Record<string, any>;
}

export interface AuditLogFilters {
    userId?: string;
    action?: string;
    category?: string;
    severity?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    page?: number;
}

@Injectable()
export class AuditService {
    constructor(
        @InjectModel(AuditLog.name) private auditLogModel: Model<AuditLogDocument>,
    ) { }

    /**
     * Log an audit event
     */
    async logEvent(options: AuditLogOptions): Promise<AuditLogDocument> {
        const auditLog = new this.auditLogModel({
            userId: options.userId,
            action: options.action,
            category: options.category,
            severity: options.severity || AuditSeverity.INFO,
            ipAddress: options.ipAddress,
            userAgent: options.userAgent,
            metadata: options.metadata,
            timestamp: new Date(),
        });

        return auditLog.save();
    }

    /**
     * Get audit logs for a specific user
     */
    async getUserAuditLogs(
        userId: string,
        filters: AuditLogFilters = {}
    ): Promise<{ logs: AuditLogDocument[]; total: number }> {
        const query: any = { userId };

        // Apply filters
        if (filters.action) query.action = filters.action;
        if (filters.category) query.category = filters.category;
        if (filters.severity) query.severity = filters.severity;
        if (filters.startDate || filters.endDate) {
            query.timestamp = {};
            if (filters.startDate) query.timestamp.$gte = filters.startDate;
            if (filters.endDate) query.timestamp.$lte = filters.endDate;
        }

        const limit = filters.limit || 50;
        const page = filters.page || 1;
        const skip = (page - 1) * limit;

        const [logs, total] = await Promise.all([
            this.auditLogModel
                .find(query)
                .sort({ timestamp: -1 })
                .limit(limit)
                .skip(skip)
                .exec(),
            this.auditLogModel.countDocuments(query),
        ]);

        return { logs, total };
    }

    /**
     * Get system-wide audit logs (admin only)
     */
    async getSystemAuditLogs(
        filters: AuditLogFilters = {}
    ): Promise<{ logs: AuditLogDocument[]; total: number }> {
        const query: any = {};

        // Apply filters
        if (filters.userId) query.userId = filters.userId;
        if (filters.action) query.action = filters.action;
        if (filters.category) query.category = filters.category;
        if (filters.severity) query.severity = filters.severity;
        if (filters.startDate || filters.endDate) {
            query.timestamp = {};
            if (filters.startDate) query.timestamp.$gte = filters.startDate;
            if (filters.endDate) query.timestamp.$lte = filters.endDate;
        }

        const limit = filters.limit || 100;
        const page = filters.page || 1;
        const skip = (page - 1) * limit;

        const [logs, total] = await Promise.all([
            this.auditLogModel
                .find(query)
                .populate('userId', 'name email')
                .sort({ timestamp: -1 })
                .limit(limit)
                .skip(skip)
                .exec(),
            this.auditLogModel.countDocuments(query),
        ]);

        return { logs, total };
    }

    /**
     * Get failed login attempts for a user within specified hours
     */
    async getFailedLoginAttempts(userId: string, hours: number = 24): Promise<number> {
        const startDate = new Date();
        startDate.setHours(startDate.getHours() - hours);

        return this.auditLogModel.countDocuments({
            userId,
            action: AuditAction.FAILED_LOGIN_ATTEMPT,
            timestamp: { $gte: startDate },
        });
    }

    /**
     * Get audit logs by date range
     */
    async getAuditLogsByDateRange(
        startDate: Date,
        endDate: Date,
        filters: Omit<AuditLogFilters, 'startDate' | 'endDate'> = {}
    ): Promise<{ logs: AuditLogDocument[]; total: number }> {
        return this.getSystemAuditLogs({
            ...filters,
            startDate,
            endDate,
        });
    }

    /**
     * Get statistics for audit logs
     */
    async getAuditStatistics(userId?: string): Promise<any> {
        const matchStage: any = {};
        if (userId) matchStage.userId = userId;

        const stats = await this.auditLogModel.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: null,
                    totalEvents: { $sum: 1 },
                    bySeverity: {
                        $push: '$severity'
                    },
                    byCategory: {
                        $push: '$category'
                    },
                    byAction: {
                        $push: '$action'
                    }
                }
            }
        ]);

        if (stats.length === 0) {
            return {
                totalEvents: 0,
                bySeverity: {},
                byCategory: {},
                byAction: {}
            };
        }

        const result = stats[0];

        // Count occurrences
        const countOccurrences = (arr: string[]) => {
            return arr.reduce((acc, item) => {
                acc[item] = (acc[item] || 0) + 1;
                return acc;
            }, {} as Record<string, number>);
        };

        return {
            totalEvents: result.totalEvents,
            bySeverity: countOccurrences(result.bySeverity),
            byCategory: countOccurrences(result.byCategory),
            byAction: countOccurrences(result.byAction)
        };
    }
}
