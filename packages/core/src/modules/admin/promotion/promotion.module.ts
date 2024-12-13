import { Module } from '@nestjs/common';
import { PromotionResolver } from './promotion.resolver';
import { PromotionService } from './promotion.service';

@Module({
    providers: [PromotionResolver, PromotionService],
})
export class PromotionModule {}
