import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

/**
 * RolesGuard enforces role-based access control.
 * This guard checks if the authenticated user has one of the required roles
 * specified by the @Roles() decorator.
 * 
 * IMPORTANT: This guard should be used AFTER JwtAuthGuard to ensure
 * the request has been authenticated and user object is available.
 * 
 * @example
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles('admin')
 * @Get('admin-only')
 * adminRoute() { }
 */
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        // Get required roles from the @Roles() decorator
        // Check both handler (method) and class level decorators
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // If no roles are required, allow access
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        // Get the user from the request (populated by JwtAuthGuard)
        const { user } = context.switchToHttp().getRequest();

        // If no user is present, deny access
        if (!user) {
            return false;
        }

        // Check if user has at least one of the required roles
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}
