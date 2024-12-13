import { Test, TestingModule } from '@nestjs/testing';
import { FacetService } from './facet.service';

describe('FacetService', () => {
    let service: FacetService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FacetService],
        }).compile();

        service = module.get<FacetService>(FacetService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
