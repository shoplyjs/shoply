import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotVerifiedError } from '@shoplyjs/common/lib/generated-shop-types';
import {
    MutationLoginArgs,
    MutationAuthenticateArgs,
    NativeAuthenticationResult,
    AuthenticationResult,
    Permission,
} from '@shoplyjs/common/lib/generated-types';
import { Success } from '@shoplyjs/common/lib/generated-types';
import { Request, Response } from 'express';

import { REQUEST_CONTEXT_KEY } from '../../../common/constants';
import { NativeAuthStrategyError } from '../../../common/error/generated-graphql-admin-errors';
import { NATIVE_AUTH_STRATEGY_NAME } from '../../../config/auth/native-authentication-strategy';
import { ConfigService } from '../../../config/config.service';
import { Logger } from '../../../config/logger/vendure-logger';
import { AdministratorService } from '../../../service/services/administrator.service';
import { AuthService } from '../../../service/services/auth.service';
import { UserService } from '../../../service/services/user.service';
import { RequestContext } from '../../common/request-context';
import { Allow } from '../../decorators/allow.decorator';
import { Ctx } from '../../decorators/request-context.decorator';
import { Transaction } from '../../decorators/transaction.decorator';
import { BaseAuthController } from '../base/base-auth.controller';

import { AuthLoginDto } from './auth.dto';

@Controller('auth')
export class AuthController extends BaseAuthController {
    constructor(
        authService: AuthService,
        userService: UserService,
        configService: ConfigService,
        administratorService: AdministratorService,
    ) {
        super(authService, userService, administratorService, configService);
    }

    @Transaction()
    @Post('login')
    @Allow(Permission.Public)
    @ApiOperation({ summary: 'Login user' })
    @ApiResponse({
        status: 200,
        description: 'Login successful',
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request, invalid credentials or missing data',
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized, invalid credentials',
    })
    async login(
        @Body() body: AuthLoginDto,
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): Promise<AuthenticationResult | NativeAuthStrategyError | NotVerifiedError | any> {
        const ctx: RequestContext = (req as any)[REQUEST_CONTEXT_KEY];
        const nativeAuthStrategyError = this.requireNativeAuthStrategy();
        if (nativeAuthStrategyError) {
            return nativeAuthStrategyError;
        }
        const user = await super.baseLogin(body, ctx, req, res);
        return user as AuthenticationResult;
    }

    @Transaction()
    @Post('authenticate')
    @Allow(Permission.Public)
    async authenticate(
        @Body() body: any,
        @Ctx() ctx: RequestContext,
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): Promise<AuthenticationResult> {
        return (await this.authenticateAndCreateSession(ctx, body, req, res)) as AuthenticationResult;
    }

    @Transaction()
    @Post('logout')
    @Allow(Permission.Public)
    logout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<Success> {
        return super.logout(req, res);
    }

    @Get('me')
    @Allow(Permission.Authenticated, Permission.Owner)
    me(@Req() req: Request) {
        return super.me(req);
    }

    protected requireNativeAuthStrategy() {
        const { adminAuthenticationStrategy } = this.configService.authOptions;
        const nativeAuthStrategyIsConfigured = !!adminAuthenticationStrategy.find(
            strategy => strategy.name === NATIVE_AUTH_STRATEGY_NAME,
        );
        if (!nativeAuthStrategyIsConfigured) {
            const authStrategyNames = adminAuthenticationStrategy.map(s => s.name).join(', ');
            const errorMessage =
                'This REST API operation requires that the NativeAuthenticationStrategy be configured for the Admin API.\n' +
                `Currently the following AuthenticationStrategies are enabled: ${authStrategyNames}`;
            Logger.error(errorMessage);
            return new NativeAuthStrategyError();
        }
    }
}
