import { Webhook } from './entities/webhook.entity';

declare module '@shoplyjs/core/dist/entity/custom-entity-fields' {
    interface CustomAdministratorFields {
        webhooks?: Webhook[];
    }
}
