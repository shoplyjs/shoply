import { Module } from '@nestjs/common';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';

@Module({
    providers: [RoleResolver, RoleService],
})
export class RoleModule {}
