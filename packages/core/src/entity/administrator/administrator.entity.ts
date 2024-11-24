import { DeepPartial } from '@shoplyjs/common/lib/shared-types';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';

import { Channel, Role, Seller } from '..';
import { SoftDeletable } from '../../common/types/common-types';
import { HasCustomFields } from '../../config/custom-field/custom-field-types';
import { VendureEntity } from '../base/base.entity';
import { CustomAdministratorFields } from '../custom-entity-fields';
import { User } from '../user/user.entity';

/**
 * @description
 * An administrative user who has access to the Admin UI and Admin API. The
 * specific permissions of the Administrator are determined by the assigned
 * {@link Role}s.
 *
 * @docsCategory entities
 */
@Entity()
export class Administrator extends VendureEntity implements SoftDeletable, HasCustomFields {
    constructor(input?: DeepPartial<Administrator>) {
        super(input);
    }

    @Column({ type: Date, nullable: true })
    deletedAt: Date | null;

    @Column({ nullable: true }) firstName: string;

    @Column({ nullable: true }) lastName: string;

    @Column({ unique: true })
    emailAddress: string;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @ManyToMany(() => Channel, channel => channel.administrators)
    @JoinTable()
    channels: Channel[];

    // Administrators belong to a seller (many-to-one relationship)
    @ManyToOne(() => Seller, seller => seller.administrators)
    seller: Seller;

    @Column(type => CustomAdministratorFields)
    customFields: CustomAdministratorFields;
}
