import { AdminUiConfig } from '@shoplyjs/common/dist/shared-types';

let vendureUiConfig: AdminUiConfig | undefined;

export async function loadAppConfig(): Promise<void> {
    vendureUiConfig = await fetch('./shoplyjs-ui-config.json').then(res => res.json());
}

export function getAppConfig(): AdminUiConfig {
    if (!vendureUiConfig) {
        throw new Error(`vendure ui config not loaded`);
    }
    return vendureUiConfig;
}
