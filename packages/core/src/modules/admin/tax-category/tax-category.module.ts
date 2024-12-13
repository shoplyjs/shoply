import { Module } from '@nestjs/common';
import { TaxCategoryResolver } from './tax-category.resolver';
import { TaxCategoryService } from './tax-category.service';

@Module({
    providers: [TaxCategoryResolver, TaxCategoryService],
})
export class TaxCategoryModule {}
