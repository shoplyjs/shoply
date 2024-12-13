import { Test, TestingModule } from '@nestjs/testing';
import { SellerResolver } from './seller.resolver';

describe('SellerResolver', () => {
    let resolver: SellerResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SellerResolver],
        }).compile();

        resolver = module.get<SellerResolver>(SellerResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
