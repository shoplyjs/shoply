import { Test, TestingModule } from '@nestjs/testing';
import { GlobalSettingsResolver } from './global-settings.resolver';

describe('GlobalSettingsResolver', () => {
    let resolver: GlobalSettingsResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GlobalSettingsResolver],
        }).compile();

        resolver = module.get<GlobalSettingsResolver>(GlobalSettingsResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
