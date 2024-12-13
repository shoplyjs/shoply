import { Module } from '@nestjs/common';
import { PaymentMethodResolver } from './payment-method.resolver';
import { PaymentMethodService } from './payment-method.service';

@Module({
    providers: [PaymentMethodResolver, PaymentMethodService],
})
export class PaymentMethodModule {}
