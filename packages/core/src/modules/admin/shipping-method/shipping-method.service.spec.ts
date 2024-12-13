import { Test, TestingModule } from '@nestjs/testing';
import { ShippingMethodService } from './shipping-method.service';

describe('ShippingMethodService', () => {
    let service: ShippingMethodService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShippingMethodService],
        }).compile();

        service = module.get<ShippingMethodService>(ShippingMethodService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
