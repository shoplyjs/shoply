import { Module } from '@nestjs/common';
import { ImportResolver } from './import.resolver';
import { ImportService } from './import.service';

@Module({
    providers: [ImportResolver, ImportService],
})
export class ImportModule {}
