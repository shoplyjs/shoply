import { Module } from '@nestjs/common';
import { AdministratorResolver } from './administrator.resolver';
import { AdministratorService } from './administrator.service';

@Module({
    providers: [AdministratorResolver, AdministratorService],
})
export class AdministratorModule {}
