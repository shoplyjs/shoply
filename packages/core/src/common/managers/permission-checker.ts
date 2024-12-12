import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Permission } from '@shoplyjs/common/dist/generated-types';
import { PERMISSIONS_METADATA_KEY, RequestContext } from '../../api';

@Injectable()
export class PermissionChecker {
    constructor(private reflector: Reflector) {}

    getPermissions(context: ExecutionContext): Permission[] | undefined {
        return this.reflector.get<Permission[]>(PERMISSIONS_METADATA_KEY, context.getHandler());
    }

    isPublic(permissions?: Permission[]): boolean {
        return !!permissions && permissions.includes(Permission.Public);
    }

    hasOwnerPermission(permissions?: Permission[]): boolean {
        return !!permissions && permissions.includes(Permission.Owner);
    }

    canActivate(requestContext: RequestContext, permissions: Permission[]): boolean {
        return requestContext.userHasPermissions(permissions) || requestContext.authorizedAsOwnerOnly;
    }
}
