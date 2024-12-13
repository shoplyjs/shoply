import { Test, TestingModule } from '@nestjs/testing';
import { ProductOptionResolver } from './product-option.resolver';

describe('ProductOptionResolver', () => {
    let resolver: ProductOptionResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductOptionResolver],
        }).compile();

        resolver = module.get<ProductOptionResolver>(ProductOptionResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
