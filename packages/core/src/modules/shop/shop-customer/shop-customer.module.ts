import { Module } from '@nestjs/common';
import { ShopCustomerResolver } from './shop-customer.resolver';
import { ShopCustomerService } from './shop-customer.service';

@Module({
    providers: [ShopCustomerResolver, ShopCustomerService],
})
export class ShopCustomerModule {}
