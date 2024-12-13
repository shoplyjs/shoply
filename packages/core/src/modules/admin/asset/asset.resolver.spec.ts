import { Test, TestingModule } from '@nestjs/testing';
import { AssetResolver } from './asset.resolver';

describe('AssetResolver', () => {
    let resolver: AssetResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AssetResolver],
        }).compile();

        resolver = module.get<AssetResolver>(AssetResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
