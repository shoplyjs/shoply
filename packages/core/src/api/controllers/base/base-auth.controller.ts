import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthenticationResult as ShopAuthenticationResult } from '@shoplyjs/common/dist/generated-shop-types';
import {
    AuthenticationResult as AdminAuthenticationResult,
    CurrentUser,
    CurrentUserChannel,
    Success,
} from '@shoplyjs/common/dist/generated-types';
import { Request, Response } from 'express';

import { isGraphQlErrorResult } from '../../../common/error/error-result';
import { ForbiddenError } from '../../../common/error/errors';
import {
    InvalidCredentialsError,
    NotVerifiedError,
} from '../../../common/error/generated-graphql-shop-errors';
import { NATIVE_AUTH_STRATEGY_NAME } from '../../../config/auth/native-authentication-strategy';
import { ConfigService } from '../../../config/config.service';
import { LogLevel } from '../../../config/logger/vendure-logger';
import { User } from '../../../entity/user/user.entity';
import { ChannelService, SellerService } from '../../../service';
import { getUserChannelsPermissions } from '../../../service/helpers/utils/get-user-channels-permissions';
import { AdministratorService } from '../../../service/services/administrator.service';
import { AuthService } from '../../../service/services/auth.service';
import { UserService } from '../../../service/services/user.service';
import { extractSessionToken } from '../../common/extract-session-token';
import { ApiType } from '../../common/get-api-type';
import { RequestContext } from '../../common/request-context';
import { setSessionToken } from '../../common/set-session-token';

@Controller('auth')
export class BaseAuthController {
    constructor(
        protected readonly authService: AuthService,
        protected readonly userService: UserService,
        protected readonly administratorService: AdministratorService,
        protected readonly configService: ConfigService,
        protected readonly channelService?: ChannelService,
        protected readonly sellerService?: SellerService,
    ) {}

    @Post('login')
    async login(
        @Body() body: any,
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): Promise<AdminAuthenticationResult | ShopAuthenticationResult | NotVerifiedError> {
        const ctx: RequestContext = (req as any).context;
        return await this.baseLogin(body, ctx, req, res);
    }

    @Post('logout')
    async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<Success> {
        const ctx: RequestContext = (req as any).context;
        const token = extractSessionToken(req, this.configService.authOptions.tokenMethod);
        if (!token) {
            return { success: false };
        }
        await this.authService.destroyAuthenticatedSession(ctx, token);
        setSessionToken({
            req,
            res,
            authOptions: this.configService.authOptions,
            rememberMe: false,
            sessionToken: '',
        });
        return { success: true };
    }

    @Get('me')
    async me(@Req() req: Request): Promise<CurrentUser | null> {
        const ctx: RequestContext = (req as any).context;
        const apiType: ApiType = ctx.apiType;
        const userId = ctx.activeUserId;

        if (!userId) {
            throw new ForbiddenError(LogLevel.Verbose);
        }

        if (apiType === 'admin') {
            const administrator = await this.administratorService.findOneByUserId(ctx, userId);
            if (!administrator) {
                throw new ForbiddenError(LogLevel.Verbose);
            }
        }

        const user = await this.userService.getUserById(ctx, userId);
        return user ? this.publiclyAccessibleUser(user) : null;
    }

    protected async baseLogin(
        body: any,
        ctx: RequestContext,
        req: Request,
        res: Response,
    ): Promise<AdminAuthenticationResult | ShopAuthenticationResult | NotVerifiedError> {
        return await this.authenticateAndCreateSession(
            ctx,
            {
                input: { [NATIVE_AUTH_STRATEGY_NAME]: body },
                rememberMe: body.rememberMe,
            },
            req,
            res,
        );
    }

    protected async authenticateAndCreateSession(
        ctx: RequestContext,
        body: any,
        req: Request,
        res: Response,
    ): Promise<AdminAuthenticationResult | ShopAuthenticationResult | NotVerifiedError> {
        const [method, data] = Object.entries(body.input)[0];
        const { apiType } = ctx;

        const session = await this.authService.authenticate(ctx, apiType, method, data);
        if (isGraphQlErrorResult(session)) {
            return session;
        }

        if (apiType === 'admin') {
            const administrator = await this.administratorService.findOneByUserId(ctx, session.user.id);
            if (!administrator) {
                return new InvalidCredentialsError({ authenticationError: '' });
            }
        }

        setSessionToken({
            req,
            res,
            authOptions: this.configService.authOptions,
            rememberMe: body.rememberMe || false,
            sessionToken: session.token,
        });

        const user = this.publiclyAccessibleUser(session.user);
        return user;
    }

    private publiclyAccessibleUser(user: User): CurrentUser {
        return {
            id: user.id,
            identifier: user.identifier,
            channels: getUserChannelsPermissions(user) as CurrentUserChannel[],
        };
    }
}
