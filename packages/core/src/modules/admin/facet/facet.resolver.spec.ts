import { Test, TestingModule } from '@nestjs/testing';
import { FacetResolver } from './facet.resolver';

describe('FacetResolver', () => {
    let resolver: FacetResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FacetResolver],
        }).compile();

        resolver = module.get<FacetResolver>(FacetResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
