import { Module } from '@nestjs/common';
import { ShopOrderResolver } from './shop-order.resolver';
import { ShopOrderService } from './shop-order.service';

@Module({
    providers: [ShopOrderResolver, ShopOrderService],
})
export class ShopOrderModule {}
