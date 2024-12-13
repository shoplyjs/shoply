import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
    providers: [OrderResolver, OrderService],
})
export class OrderModule {}
