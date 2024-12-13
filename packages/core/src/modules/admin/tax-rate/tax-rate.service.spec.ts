import { Test, TestingModule } from '@nestjs/testing';
import { TaxRateService } from './tax-rate.service';

describe('TaxRateService', () => {
    let service: TaxRateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TaxRateService],
        }).compile();

        service = module.get<TaxRateService>(TaxRateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
