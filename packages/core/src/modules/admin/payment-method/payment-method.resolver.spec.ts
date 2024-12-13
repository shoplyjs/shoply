import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodResolver } from './payment-method.resolver';

describe('PaymentMethodResolver', () => {
    let resolver: PaymentMethodResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PaymentMethodResolver],
        }).compile();

        resolver = module.get<PaymentMethodResolver>(PaymentMethodResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
