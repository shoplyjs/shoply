import { Logger, PluginCommonModule, VendurePlugin } from '@shoplyjs/core';

import { adminApiExtensions } from './api/api-extension';
import { WebhookController } from './api/webhook.controller';
import { WebhookResolver } from './api/webhook.resolver';
import { Webhook } from './entities/webhook.entity';
import { WebhookService } from './services/webhook.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [WebhookService],
    controllers: [WebhookController],
    entities: [Webhook],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [WebhookResolver],
    },
    compatibility: '^2.0.0',
})
export class WebhookPlugin {
    static options: any;

    static init(options: any) {
        Logger.info(`Initializing ${WebhookPlugin.name} plugin`);

        this.options = options;
        return WebhookPlugin;
    }
}
