import { Test, TestingModule } from '@nestjs/testing';
import { ShopCustomerService } from './shop-customer.service';

describe('ShopCustomerService', () => {
    let service: ShopCustomerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopCustomerService],
        }).compile();

        service = module.get<ShopCustomerService>(ShopCustomerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
