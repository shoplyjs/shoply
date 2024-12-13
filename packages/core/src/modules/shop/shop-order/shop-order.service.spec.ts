import { Test, TestingModule } from '@nestjs/testing';
import { ShopOrderService } from './shop-order.service';

describe('ShopOrderService', () => {
    let service: ShopOrderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopOrderService],
        }).compile();

        service = module.get<ShopOrderService>(ShopOrderService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
