import {
    CustomProductVariantFields,
    CustomFulfillmentFields,
    CustomShippingMethodFields,
} from '@shoplyjs/core/dist/entity/custom-entity-fields';

declare module '@shoplyjs/core/dist/entity/custom-entity-fields' {
    interface CustomProductVariantFields {
        isDigital: boolean;
    }
    interface CustomShippingMethodFields {
        isDigital: boolean;
    }
    interface CustomFulfillmentFields {
        downloadUrls: string[] | null;
    }
}
