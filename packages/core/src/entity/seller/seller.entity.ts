import { DeepPartial } from '@shoplyjs/common/dist/shared-types';
import { Column, Entity, OneToMany } from 'typeorm';

import { Channel, Administrator } from '..';
import { SoftDeletable } from '../../common/types/common-types';
import { HasCustomFields } from '../../config/custom-field/custom-field-types';
import { VendureEntity } from '../base/base.entity';
import { CustomSellerFields } from '../custom-entity-fields';

/**
 * @description
 * A Seller represents the person or organization who is selling the goods on a given {@link Channel}.
 * By default, a single-channel Vendure installation will have a single default Seller.
 *
 * @docsCategory entities
 */
@Entity()
export class Seller extends VendureEntity implements SoftDeletable, HasCustomFields {
    constructor(input?: DeepPartial<Seller>) {
        super(input);
    }

    @Column({ type: Date, nullable: true })
    deletedAt: Date | null;

    @Column() name: string;

    @OneToMany(type => Channel, channel => channel.seller)
    channels: Channel[];

    @OneToMany(() => Administrator, admin => admin.seller)
    administrators: Administrator[];

    @Column(type => CustomSellerFields)
    customFields: CustomSellerFields;
}
