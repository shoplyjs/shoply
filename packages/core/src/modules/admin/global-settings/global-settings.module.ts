import { Module } from '@nestjs/common';
import { GlobalSettingsResolver } from './global-settings.resolver';
import { GlobalSettingsService } from './global-settings.service';

@Module({
    providers: [GlobalSettingsResolver, GlobalSettingsService],
})
export class GlobalSettingsModule {}
