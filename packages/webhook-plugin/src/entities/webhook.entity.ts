import { DeepPartial, VendureEntity } from '@shoplyjs/core';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { ID } from '@shoplyjs/common/dist/shared-types';

@Entity()
export class Webhook extends VendureEntity {
    constructor(input?: DeepPartial<Webhook>) {
        super(input);
    }

    @Column('text')
    channelId: ID;

    @Column()
    event: string;

    @Column({ unique: true, nullable: true })
    eventId: string;

    @Column({ enum: ['rest', 'graphql'], default: 'rest' })
    clientType: string;

    @Column()
    url: string;

    @Column({ default: 'POST' })
    method: string;

    @Column({ type: 'simple-json' })
    headers: Record<string, string>;

    @BeforeInsert()
    setEventId(): void {
        this.eventId = `${this.event}:${this.id || 'new'}`; // Use 'new' as a placeholder if `id` is not yet set
    }
}
