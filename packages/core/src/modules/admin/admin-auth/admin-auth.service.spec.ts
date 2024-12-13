import { Test, TestingModule } from '@nestjs/testing';
import { AdminAuthService } from './admin-auth.service';

describe('AdminAuthService', () => {
    let service: AdminAuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AdminAuthService],
        }).compile();

        service = module.get<AdminAuthService>(AdminAuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
