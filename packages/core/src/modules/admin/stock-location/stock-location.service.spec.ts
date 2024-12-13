import { Test, TestingModule } from '@nestjs/testing';
import { StockLocationService } from './stock-location.service';

describe('StockLocationService', () => {
    let service: StockLocationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StockLocationService],
        }).compile();

        service = module.get<StockLocationService>(StockLocationService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
