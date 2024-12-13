import { Module } from '@nestjs/common';
import { CustomerGroupResolver } from './customer-group.resolver';
import { CustomerGroupService } from './customer-group.service';

@Module({
    providers: [CustomerGroupResolver, CustomerGroupService],
})
export class CustomerGroupModule {}
