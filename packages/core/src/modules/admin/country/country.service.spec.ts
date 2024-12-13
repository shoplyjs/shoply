import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
    let service: CountryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountryService],
        }).compile();

        service = module.get<CountryService>(CountryService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
