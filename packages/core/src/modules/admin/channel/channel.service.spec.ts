import { Test, TestingModule } from '@nestjs/testing';
import { ChannelService } from './channel.service';

describe('ChannelService', () => {
    let service: ChannelService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ChannelService],
        }).compile();

        service = module.get<ChannelService>(ChannelService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
