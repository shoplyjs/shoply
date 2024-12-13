import { Test, TestingModule } from '@nestjs/testing';
import { ShopEnvironmentResolver } from './shop-environment.resolver';

describe('ShopEnvironmentResolver', () => {
    let resolver: ShopEnvironmentResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopEnvironmentResolver],
        }).compile();

        resolver = module.get<ShopEnvironmentResolver>(ShopEnvironmentResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
