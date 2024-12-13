import { Module } from '@nestjs/common';
import { DuplicateEntityResolver } from './duplicate-entity.resolver';
import { DuplicateEntityService } from './duplicate-entity.service';

@Module({
    providers: [DuplicateEntityResolver, DuplicateEntityService],
})
export class DuplicateEntityModule {}
