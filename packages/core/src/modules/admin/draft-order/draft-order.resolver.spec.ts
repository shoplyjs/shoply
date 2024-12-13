import { Test, TestingModule } from '@nestjs/testing';
import { DraftOrderResolver } from './draft-order.resolver';

describe('DraftOrderResolver', () => {
    let resolver: DraftOrderResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DraftOrderResolver],
        }).compile();

        resolver = module.get<DraftOrderResolver>(DraftOrderResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
