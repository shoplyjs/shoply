import { Test, TestingModule } from '@nestjs/testing';
import { ShopProductsResolver } from './shop-products.resolver';

describe('ShopProductsResolver', () => {
    let resolver: ShopProductsResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopProductsResolver],
        }).compile();

        resolver = module.get<ShopProductsResolver>(ShopProductsResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
