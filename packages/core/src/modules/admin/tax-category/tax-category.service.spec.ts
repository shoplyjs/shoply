import { Test, TestingModule } from '@nestjs/testing';
import { TaxCategoryService } from './tax-category.service';

describe('TaxCategoryService', () => {
    let service: TaxCategoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TaxCategoryService],
        }).compile();

        service = module.get<TaxCategoryService>(TaxCategoryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
