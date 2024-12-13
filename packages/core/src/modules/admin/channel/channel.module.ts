import { Module } from '@nestjs/common';
import { ChannelResolver } from './channel.resolver';
import { ChannelService } from './channel.service';

@Module({
    providers: [ChannelResolver, ChannelService],
})
export class ChannelModule {}
