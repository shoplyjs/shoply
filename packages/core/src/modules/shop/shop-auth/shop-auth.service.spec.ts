import { Test, TestingModule } from '@nestjs/testing';
import { ShopAuthService } from './shop-auth.service';

describe('ShopAuthService', () => {
    let service: ShopAuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopAuthService],
        }).compile();

        service = module.get<ShopAuthService>(ShopAuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
