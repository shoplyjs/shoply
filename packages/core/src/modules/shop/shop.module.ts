import { Module } from '@nestjs/common';
import { ShopAuthModule } from './shop-auth/shop-auth.module';
import { ShopCustomerModule } from './shop-customer/shop-customer.module';
import { ShopEnvironmentModule } from './shop-environment/shop-environment.module';
import { ShopOrderModule } from './shop-order/shop-order.module';
import { ShopProductsModule } from './shop-products/shop-products.module';

@Module({
    imports: [ShopAuthModule, ShopCustomerModule, ShopEnvironmentModule, ShopOrderModule, ShopProductsModule],
})
export class ShopModule {}
