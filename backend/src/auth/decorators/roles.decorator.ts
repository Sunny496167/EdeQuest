import { SetMetadata } from '@nestjs/common';

/**
 * Roles decorator for role-based access control.
 * Use this decorator to specify which roles are required to access a route.
 * 
 * @example
 * @Roles('admin')
 * @Get('admin-dashboard')
 * adminDashboard() { }
 * 
 * @example
 * @Roles('admin', 'teacher')
 * @Get('manage-content')
 * manageContent() { }
 */
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
