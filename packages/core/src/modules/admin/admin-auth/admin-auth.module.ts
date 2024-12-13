import { Module } from '@nestjs/common';
import { AdminAuthResolver } from './admin-auth.resolver';
import { AdminAuthService } from './admin-auth.service';

@Module({
    providers: [AdminAuthResolver, AdminAuthService],
})
export class AdminAuthModule {}
