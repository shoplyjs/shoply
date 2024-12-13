import { Module } from '@nestjs/common';
import { ShopEnvironmentResolver } from './shop-environment.resolver';
import { ShopEnvironmentService } from './shop-environment.service';

@Module({
    providers: [ShopEnvironmentResolver, ShopEnvironmentService],
})
export class ShopEnvironmentModule {}
