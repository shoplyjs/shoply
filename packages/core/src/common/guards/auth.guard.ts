import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Permission } from '@shoplyjs/common/dist/generated-types';
import { Request, Response } from 'express';
import { GraphQLResolveInfo } from 'graphql';

import { REQUEST_CONTEXT_KEY } from '../../common/constants';
import { ForbiddenError } from '../../common/error/errors';
import { ConfigService } from '../../config/config.service';
import { LogLevel } from '../../config/logger/vendure-logger';
import { RequestContextService } from '../../service/helpers/request-context/request-context.service';
import { parseContext } from '../../api/common/parse-context';
import { RequestContext } from '../../api';
import { SessionManager } from '../managers/session.manager';
import { ChannelManager } from '../managers/channel.manager';
import { PermissionChecker } from '../managers/permission-checker';

/**
 * @description
 * A guard which:
 *
 * 1. checks for the existence of a valid session token in the request and if found,
 * attaches the current User entity to the request.
 * 2. enforces any permissions required by the target handler (resolver, field resolver or route),
 * and throws a ForbiddenError if those permissions are not present.
 */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private configService: ConfigService,
        private requestContextService: RequestContextService,
        private sessionManager: SessionManager,
        private channelManager: ChannelManager,
        private permissionChecker: PermissionChecker,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { req, res, info } = parseContext(context);
        const permissions = this.permissionChecker.getPermissions(context);

        if (this.isFieldResolverWithoutPermissions(info, permissions)) {
            return true;
        }

        const requestContext = await this.buildRequestContext(req, res, info, permissions);

        if (this.shouldAllowAccess(permissions)) {
            return true;
        }

        if (permissions == null) return false;

        if (!this.permissionChecker.canActivate(requestContext, permissions)) {
            throw new ForbiddenError(LogLevel.Verbose);
        }

        return true;
    }

    private isFieldResolverWithoutPermissions(
        info?: GraphQLResolveInfo,
        permissions?: Permission[],
    ): boolean {
        return this.isFieldResolver(info) && !permissions;
    }

    private async buildRequestContext(
        req: Request,
        res: Response,
        info: GraphQLResolveInfo | undefined,
        permissions?: Permission[],
    ): Promise<RequestContext> {
        if (this.isFieldResolver(info)) {
            return (req as any)[REQUEST_CONTEXT_KEY];
        }

        const hasOwnerPermission = this.permissionChecker.hasOwnerPermission(permissions);
        const session = await this.sessionManager.getSession(req, res, hasOwnerPermission);
        let requestContext = await this.requestContextService.fromRequest(req, info, permissions, session);

        const shouldReinitialize = await this.channelManager.setActiveChannel(requestContext, session);
        if (shouldReinitialize) {
            requestContext = await this.requestContextService.fromRequest(req, info, permissions, session);
        }

        (req as any)[REQUEST_CONTEXT_KEY] = requestContext;
        return requestContext;
    }

    private shouldAllowAccess(permissions?: Permission[]): boolean {
        return (
            this.configService.authOptions.disableAuth ||
            !permissions ||
            this.permissionChecker.isPublic(permissions)
        );
    }

    private isFieldResolver(info?: GraphQLResolveInfo): boolean {
        if (!info) {
            return false;
        }
        const parentType = info?.parentType?.name;
        return parentType !== 'Query' && parentType !== 'Mutation' && parentType !== 'Subscription';
    }
}
