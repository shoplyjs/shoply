import { Test, TestingModule } from '@nestjs/testing';
import { DuplicateEntityService } from './duplicate-entity.service';

describe('DuplicateEntityService', () => {
    let service: DuplicateEntityService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DuplicateEntityService],
        }).compile();

        service = module.get<DuplicateEntityService>(DuplicateEntityService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
