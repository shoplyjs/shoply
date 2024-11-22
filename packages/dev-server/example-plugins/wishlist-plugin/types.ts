import { CustomCustomerFields } from '@shoplyjs/core/dist/entity/custom-entity-fields';

import { WishlistItem } from './entities/wishlist-item.entity';

declare module '@shoplyjs/core/dist/entity/custom-entity-fields' {
    interface CustomCustomerFields {
        wishlistItems: WishlistItem[];
    }
}
