import { Test, TestingModule } from '@nestjs/testing';
import { ShopProductsService } from './shop-products.service';

describe('ShopProductsService', () => {
    let service: ShopProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopProductsService],
        }).compile();

        service = module.get<ShopProductsService>(ShopProductsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
