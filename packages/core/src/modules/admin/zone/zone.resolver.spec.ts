import { Test, TestingModule } from '@nestjs/testing';
import { ZoneResolver } from './zone.resolver';

describe('ZoneResolver', () => {
    let resolver: ZoneResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ZoneResolver],
        }).compile();

        resolver = module.get<ZoneResolver>(ZoneResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
