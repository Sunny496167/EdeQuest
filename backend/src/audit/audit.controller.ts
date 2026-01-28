import { Controller, Get, Query, Req, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AuditService } from './audit.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Audit')
@ApiBearerAuth('JWT-auth')
@Controller('audit')
export class AuditController {
    constructor(private readonly auditService: AuditService) { }

    @Get('me')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get current user\'s audit logs',
        description: 'Returns audit trail of security events for the authenticated user'
    })
    @ApiResponse({
        status: 200,
        description: 'User audit logs retrieved successfully',
        schema: {
            example: {
                logs: [
                    {
                        action: 'LOGIN_SUCCESS',
                        category: 'AUTHENTICATION',
                        severity: 'INFO',
                        ipAddress: '192.168.1.100',
                        timestamp: '2026-01-28T08:00:00Z'
                    }
                ],
                total: 47,
                page: 1,
                limit: 50
            }
        }
    })
    @ApiQuery({ name: 'action', required: false, description: 'Filter by action type' })
    @ApiQuery({ name: 'category', required: false, description: 'Filter by category' })
    @ApiQuery({ name: 'severity', required: false, description: 'Filter by severity level' })
    @ApiQuery({ name: 'startDate', required: false, description: 'Start date for filtering (ISO 8601)' })
    @ApiQuery({ name: 'endDate', required: false, description: 'End date for filtering (ISO 8601)' })
    @ApiQuery({ name: 'limit', required: false, description: 'Number of results per page', type: Number })
    @ApiQuery({ name: 'page', required: false, description: 'Page number', type: Number })
    async getMyAuditLogs(
        @Req() req,
        @Query('action') action?: string,
        @Query('category') category?: string,
        @Query('severity') severity?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('limit') limit?: string,
        @Query('page') page?: string,
    ) {
        const userId = req.user.userId;

        const filters = {
            action,
            category,
            severity,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            limit: limit ? parseInt(limit, 10) : 50,
            page: page ? parseInt(page, 10) : 1,
        };

        const { logs, total } = await this.auditService.getUserAuditLogs(userId, filters);

        return {
            logs: logs.map(log => ({
                id: log._id,
                action: log.action,
                category: log.category,
                severity: log.severity,
                ipAddress: log.ipAddress,
                userAgent: log.userAgent,
                metadata: log.metadata,
                timestamp: log.timestamp,
            })),
            total,
            page: filters.page,
            limit: filters.limit,
            totalPages: Math.ceil(total / filters.limit),
        };
    }

    @Get('user/:userId')
    @UseGuards(RolesGuard)
    @Roles('admin')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get audit logs for specific user (Admin only)',
        description: 'Returns complete audit trail for a specific user'
    })
    @ApiResponse({ status: 200, description: 'User audit logs retrieved successfully' })
    @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
    @ApiQuery({ name: 'action', required: false })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'severity', required: false })
    @ApiQuery({ name: 'startDate', required: false })
    @ApiQuery({ name: 'endDate', required: false })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'page', required: false, type: Number })
    async getUserAuditLogs(
        @Req() req,
        @Query('action') action?: string,
        @Query('category') category?: string,
        @Query('severity') severity?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('limit') limit?: string,
        @Query('page') page?: string,
    ) {
        const userId = req.params.userId;

        const filters = {
            action,
            category,
            severity,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            limit: limit ? parseInt(limit, 10) : 50,
            page: page ? parseInt(page, 10) : 1,
        };

        const { logs, total } = await this.auditService.getUserAuditLogs(userId, filters);

        return {
            logs,
            total,
            page: filters.page,
            limit: filters.limit,
            totalPages: Math.ceil(total / filters.limit),
        };
    }

    @Get('system')
    @UseGuards(RolesGuard)
    @Roles('admin')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get system-wide audit logs (Admin only)',
        description: 'Returns audit trail for all users and system events'
    })
    @ApiResponse({ status: 200, description: 'System audit logs retrieved successfully' })
    @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
    @ApiQuery({ name: 'userId', required: false, description: 'Filter by user ID' })
    @ApiQuery({ name: 'action', required: false })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'severity', required: false })
    @ApiQuery({ name: 'startDate', required: false })
    @ApiQuery({ name: 'endDate', required: false })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'page', required: false, type: Number })
    async getSystemAuditLogs(
        @Query('userId') userId?: string,
        @Query('action') action?: string,
        @Query('category') category?: string,
        @Query('severity') severity?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('limit') limit?: string,
        @Query('page') page?: string,
    ) {
        const filters = {
            userId,
            action,
            category,
            severity,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            limit: limit ? parseInt(limit, 10) : 100,
            page: page ? parseInt(page, 10) : 1,
        };

        const { logs, total } = await this.auditService.getSystemAuditLogs(filters);

        return {
            logs,
            total,
            page: filters.page,
            limit: filters.limit,
            totalPages: Math.ceil(total / filters.limit),
        };
    }

    @Get('statistics')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get audit statistics for current user',
        description: 'Returns aggregated statistics of audit events'
    })
    @ApiResponse({
        status: 200,
        description: 'Statistics retrieved successfully',
        schema: {
            example: {
                totalEvents: 127,
                bySeverity: { INFO: 100, WARNING: 20, ERROR: 5, CRITICAL: 2 },
                byCategory: { AUTHENTICATION: 50, PASSWORD_MANAGEMENT: 10 },
                byAction: { LOGIN_SUCCESS: 45, LOGIN_FAILED: 5 }
            }
        }
    })
    async getMyStatistics(@Req() req) {
        const userId = req.user.userId;
        return this.auditService.getAuditStatistics(userId);
    }

    @Get('statistics/system')
    @UseGuards(RolesGuard)
    @Roles('admin')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Get system-wide audit statistics (Admin only)',
        description: 'Returns aggregated statistics for all audit events'
    })
    @ApiResponse({ status: 200, description: 'System statistics retrieved successfully' })
    @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
    async getSystemStatistics() {
        return this.auditService.getAuditStatistics();
    }
}
