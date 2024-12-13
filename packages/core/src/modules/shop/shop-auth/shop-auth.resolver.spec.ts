import { Test, TestingModule } from '@nestjs/testing';
import { ShopAuthResolver } from './shop-auth.resolver';

describe('ShopAuthResolver', () => {
    let resolver: ShopAuthResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopAuthResolver],
        }).compile();

        resolver = module.get<ShopAuthResolver>(ShopAuthResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
