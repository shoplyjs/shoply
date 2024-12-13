import { Module } from '@nestjs/common';
import { TaxRateResolver } from './tax-rate.resolver';
import { TaxRateService } from './tax-rate.service';

@Module({
    providers: [TaxRateResolver, TaxRateService],
})
export class TaxRateModule {}
