import { Module } from '@nestjs/common';
import { AssetResolver } from './asset.resolver';
import { AssetService } from './asset.service';

@Module({
    providers: [AssetResolver, AssetService],
})
export class AssetModule {}
