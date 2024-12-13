import { Test, TestingModule } from '@nestjs/testing';
import { ShippingMethodResolver } from './shipping-method.resolver';

describe('ShippingMethodResolver', () => {
    let resolver: ShippingMethodResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShippingMethodResolver],
        }).compile();

        resolver = module.get<ShippingMethodResolver>(ShippingMethodResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
