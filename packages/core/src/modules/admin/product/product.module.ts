import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
    providers: [ProductResolver, ProductService],
})
export class ProductModule {}
