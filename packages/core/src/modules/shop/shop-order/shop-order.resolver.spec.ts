import { Test, TestingModule } from '@nestjs/testing';
import { ShopOrderResolver } from './shop-order.resolver';

describe('ShopOrderResolver', () => {
    let resolver: ShopOrderResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopOrderResolver],
        }).compile();

        resolver = module.get<ShopOrderResolver>(ShopOrderResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
