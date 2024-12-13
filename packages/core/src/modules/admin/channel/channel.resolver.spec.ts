import { Test, TestingModule } from '@nestjs/testing';
import { ChannelResolver } from './channel.resolver';

describe('ChannelResolver', () => {
    let resolver: ChannelResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ChannelResolver],
        }).compile();

        resolver = module.get<ChannelResolver>(ChannelResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
