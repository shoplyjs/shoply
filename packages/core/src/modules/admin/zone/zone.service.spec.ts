import { Test, TestingModule } from '@nestjs/testing';
import { ZoneService } from './zone.service';

describe('ZoneService', () => {
    let service: ZoneService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ZoneService],
        }).compile();

        service = module.get<ZoneService>(ZoneService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
