import { Module } from '@nestjs/common';
import { ShopAuthResolver } from './shop-auth.resolver';
import { ShopAuthService } from './shop-auth.service';

@Module({
    providers: [ShopAuthResolver, ShopAuthService],
})
export class ShopAuthModule {}
