import { Module } from '@nestjs/common';
import { StockLocationResolver } from './stock-location.resolver';
import { StockLocationService } from './stock-location.service';

@Module({
    providers: [StockLocationResolver, StockLocationService],
})
export class StockLocationModule {}
