import { Module } from '@nestjs/common';
import { ZoneResolver } from './zone.resolver';
import { ZoneService } from './zone.service';

@Module({
    providers: [ZoneResolver, ZoneService],
})
export class ZoneModule {}
