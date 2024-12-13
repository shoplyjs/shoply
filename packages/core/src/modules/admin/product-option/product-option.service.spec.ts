import { Test, TestingModule } from '@nestjs/testing';
import { ProductOptionService } from './product-option.service';

describe('ProductOptionService', () => {
    let service: ProductOptionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductOptionService],
        }).compile();

        service = module.get<ProductOptionService>(ProductOptionService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
