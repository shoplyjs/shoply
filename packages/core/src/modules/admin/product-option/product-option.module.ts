import { Module } from '@nestjs/common';
import { ProductOptionResolver } from './product-option.resolver';
import { ProductOptionService } from './product-option.service';

@Module({
    providers: [ProductOptionResolver, ProductOptionService],
})
export class ProductOptionModule {}
