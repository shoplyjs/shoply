import { Test, TestingModule } from '@nestjs/testing';
import { GlobalSettingsService } from './global-settings.service';

describe('GlobalSettingsService', () => {
    let service: GlobalSettingsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GlobalSettingsService],
        }).compile();

        service = module.get<GlobalSettingsService>(GlobalSettingsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
