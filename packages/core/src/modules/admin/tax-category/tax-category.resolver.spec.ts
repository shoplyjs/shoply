import { Test, TestingModule } from '@nestjs/testing';
import { TaxCategoryResolver } from './tax-category.resolver';

describe('TaxCategoryResolver', () => {
    let resolver: TaxCategoryResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TaxCategoryResolver],
        }).compile();

        resolver = module.get<TaxCategoryResolver>(TaxCategoryResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
