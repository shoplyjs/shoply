import { Module } from '@nestjs/common';
import { ShippingMethodResolver } from './shipping-method.resolver';
import { ShippingMethodService } from './shipping-method.service';

@Module({
    providers: [ShippingMethodResolver, ShippingMethodService],
})
export class ShippingMethodModule {}
