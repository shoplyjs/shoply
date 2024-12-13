import { Module } from '@nestjs/common';
import { SellerResolver } from './seller.resolver';
import { SellerService } from './seller.service';

@Module({
    providers: [SellerResolver, SellerService],
})
export class SellerModule {}
