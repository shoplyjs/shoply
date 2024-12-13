import { Test, TestingModule } from '@nestjs/testing';
import { ShopEnvironmentService } from './shop-environment.service';

describe('ShopEnvironmentService', () => {
    let service: ShopEnvironmentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShopEnvironmentService],
        }).compile();

        service = module.get<ShopEnvironmentService>(ShopEnvironmentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
