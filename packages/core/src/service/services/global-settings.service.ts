import { Injectable } from '@nestjs/common';
import { UpdateGlobalSettingsInput } from '@shoplyjs/common/dist/generated-types';

import { RequestContext } from '../../api/common/request-context';
import { RequestContextCacheService } from '../../cache/request-context-cache.service';
import { CacheKey } from '../../common/constants';
import { InternalServerError } from '../../common/error/errors';
import { ConfigService } from '../../config/config.service';
import { TransactionalConnection } from '../../connection/transactional-connection';
import { GlobalSettings } from '../../entity/global-settings/global-settings.entity';
import { GlobalSettingsEvent } from '../../event-bus/events/global-settings-event';
import { CustomFieldRelationService } from '../helpers/custom-field-relation/custom-field-relation.service';
import { patchEntity } from '../helpers/utils/patch-entity';
import { EventNames } from '@shoplyjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

/**
 * @description
 * Contains methods relating to the {@link GlobalSettings} entity.
 *
 * @docsCategory services
 */
@Injectable()
export class GlobalSettingsService {
    constructor(
        private connection: TransactionalConnection,
        private configService: ConfigService,
        private customFieldRelationService: CustomFieldRelationService,
        private requestCache: RequestContextCacheService,
        private eventEmitter: EventEmitter2,
    ) {}

    /**
     * Ensure there is a single global settings row in the database.
     * @internal
     */
    async initGlobalSettings() {
        try {
            const result = await this.connection.rawConnection.getRepository(GlobalSettings).find();
            if (result.length === 0) {
                throw new Error('No global settings');
            }
            if (1 < result.length) {
                // Strange edge case, see https://github.com/vendure-ecommerce/vendure/issues/987
                const toDelete = result.slice(1);
                await this.connection.rawConnection.getRepository(GlobalSettings).remove(toDelete);
            }
        } catch (err: any) {
            const settings = new GlobalSettings({
                availableLanguages: [this.configService.defaultLanguageCode],
            });
            await this.connection.rawConnection
                .getRepository(GlobalSettings)
                .save(settings, { reload: false });
        }
    }

    /**
     * @description
     * Returns the GlobalSettings entity.
     */
    async getSettings(ctx: RequestContext): Promise<GlobalSettings> {
        const settings = await this.requestCache.get(ctx, CacheKey.GlobalSettings, () =>
            this.connection
                .getRepository(ctx, GlobalSettings)
                .createQueryBuilder('global_settings')
                .orderBy(this.connection.rawConnection.driver.escape('createdAt'), 'ASC')
                .getOne(),
        );
        if (!settings) {
            throw new InternalServerError('error.global-settings-not-found');
        }
        return settings;
    }

    async updateSettings(ctx: RequestContext, input: UpdateGlobalSettingsInput): Promise<GlobalSettings> {
        const settings = await this.getSettings(ctx);
        this.eventEmitter.emit(
            EventNames.GLOBAL_SETTINGS_UPDATED,
            new GlobalSettingsEvent(ctx, settings, input),
        );
        patchEntity(settings, input);
        await this.customFieldRelationService.updateRelations(ctx, GlobalSettings, input, settings);
        return this.connection.getRepository(ctx, GlobalSettings).save(settings);
    }
}
