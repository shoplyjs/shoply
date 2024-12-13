import { Test, TestingModule } from '@nestjs/testing';
import { DuplicateEntityResolver } from './duplicate-entity.resolver';

describe('DuplicateEntityResolver', () => {
    let resolver: DuplicateEntityResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DuplicateEntityResolver],
        }).compile();

        resolver = module.get<DuplicateEntityResolver>(DuplicateEntityResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
