import { Test, TestingModule } from '@nestjs/testing';
import { ShopCustomerResolver } from './shop-customer.resolver';

describe('ShopCustomerResolver', () => {
    let resolver: ShopCustomerResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopCustomerResolver],
        }).compile();

        resolver = module.get<ShopCustomerResolver>(ShopCustomerResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
