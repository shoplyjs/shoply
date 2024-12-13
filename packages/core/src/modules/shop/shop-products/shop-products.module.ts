import { Module } from '@nestjs/common';
import { ShopProductsResolver } from './shop-products.resolver';
import { ShopProductsService } from './shop-products.service';

@Module({
    providers: [ShopProductsResolver, ShopProductsService],
})
export class ShopProductsModule {}
