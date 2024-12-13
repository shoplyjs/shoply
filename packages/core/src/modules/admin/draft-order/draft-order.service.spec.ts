import { Test, TestingModule } from '@nestjs/testing';
import { DraftOrderService } from './draft-order.service';

describe('DraftOrderService', () => {
    let service: DraftOrderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DraftOrderService],
        }).compile();

        service = module.get<DraftOrderService>(DraftOrderService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
