import { Request, Response } from 'express';
import { Injectable } from '@nestjs/common';
import { CachedSession, ConfigService } from '../../config';
import { extractSessionToken } from '../../api';
import { SessionService } from '../../service';
import { setSessionToken } from '../../api/common/set-session-token';

@Injectable()
export class SessionManager {
    constructor(
        private configService: ConfigService,
        private sessionService: SessionService,
    ) {}

    async getSession(
        req: Request,
        res: Response,
        hasOwnerPermission: boolean,
    ): Promise<CachedSession | undefined> {
        const sessionToken = extractSessionToken(req, this.configService.authOptions.tokenMethod);
        console.log(sessionToken);
        let serializedSession: CachedSession | undefined;

        if (sessionToken) {
            serializedSession = await this.sessionService.getSessionFromToken(sessionToken);
            if (serializedSession) {
                return serializedSession;
            }
            this.clearSessionToken(req, res);
        }

        if (hasOwnerPermission && !serializedSession) {
            serializedSession = await this.sessionService.createAnonymousSession();
            this.setNewSessionToken(req, res, serializedSession.token);
        }
        return serializedSession;
    }

    private clearSessionToken(req: Request, res: Response): void {
        setSessionToken({
            req,
            res,
            authOptions: this.configService.authOptions,
            rememberMe: false,
            sessionToken: '',
        });
    }

    private setNewSessionToken(req: Request, res: Response, token: string): void {
        setSessionToken({
            sessionToken: token,
            rememberMe: true,
            authOptions: this.configService.authOptions,
            req,
            res,
        });
    }
}
