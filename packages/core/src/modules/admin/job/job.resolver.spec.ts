import { Test, TestingModule } from '@nestjs/testing';
import { JobResolver } from './job.resolver';

describe('JobResolver', () => {
    let resolver: JobResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [JobResolver],
        }).compile();

        resolver = module.get<JobResolver>(JobResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
