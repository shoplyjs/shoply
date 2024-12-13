import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
    providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
