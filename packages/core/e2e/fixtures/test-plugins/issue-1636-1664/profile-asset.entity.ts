import { DeepPartial } from '@shoplyjs/common/dist/shared-types';
import { Asset, VendureEntity } from '@shoplyjs/core';
import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { Profile } from './profile.entity';

@Entity()
export class ProfileAsset extends VendureEntity {
    constructor(input?: DeepPartial<ProfileAsset>) {
        super(input);
    }

    @OneToOne(() => Asset, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    asset: Asset;

    @ManyToOne(() => Profile, { onDelete: 'CASCADE' })
    profile: Profile;
}
