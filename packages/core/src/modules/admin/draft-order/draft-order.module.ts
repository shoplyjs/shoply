import { Module } from '@nestjs/common';
import { DraftOrderResolver } from './draft-order.resolver';
import { DraftOrderService } from './draft-order.service';

@Module({
    providers: [DraftOrderResolver, DraftOrderService],
})
export class DraftOrderModule {}
