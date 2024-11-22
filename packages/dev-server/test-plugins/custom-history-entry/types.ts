import { CustomerHistoryEntryData } from '@shoplyjs/core';

export const CUSTOM_TYPE = 'CUSTOM_TYPE';

declare module '@shoplyjs/core' {
    interface OrderHistoryEntryData {
        [CUSTOM_TYPE]: { message: string };
    }

    interface CustomerHistoryEntryData {
        [CUSTOM_TYPE]: { name: string };
    }
}
