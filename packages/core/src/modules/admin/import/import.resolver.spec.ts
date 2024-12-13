import { Test, TestingModule } from '@nestjs/testing';
import { ImportResolver } from './import.resolver';

describe('ImportResolver', () => {
    let resolver: ImportResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ImportResolver],
        }).compile();

        resolver = module.get<ImportResolver>(ImportResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
