import { DeepPartial, ID, ProductVariant, VendureEntity } from '@shoplyjs/core';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class WishlistItem extends VendureEntity {
    constructor(input?: DeepPartial<WishlistItem>) {
        super(input);
    }

    @ManyToOne(type => ProductVariant)
    productVariant: ProductVariant;

    @Column()
    productVariantId: ID;
}
