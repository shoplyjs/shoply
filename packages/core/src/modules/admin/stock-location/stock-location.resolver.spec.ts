import { Test, TestingModule } from '@nestjs/testing';
import { StockLocationResolver } from './stock-location.resolver';

describe('StockLocationResolver', () => {
    let resolver: StockLocationResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StockLocationResolver],
        }).compile();

        resolver = module.get<StockLocationResolver>(StockLocationResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
