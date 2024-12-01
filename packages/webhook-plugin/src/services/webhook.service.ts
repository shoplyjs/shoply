import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EntityNotFoundError, Logger } from '@shoplyjs/core';
import { RequestContext, TransactionalConnection } from '@shoplyjs/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Webhook } from '../entities/webhook.entity';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
import { WebhookEventHandler } from './webhook-event-handler';

@Injectable()
export class WebhookService implements OnApplicationBootstrap {
    private eventHandler: WebhookEventHandler;

    constructor(
        private connection: TransactionalConnection,
        eventEmitter: EventEmitter2,
    ) {
        this.eventHandler = new WebhookEventHandler(eventEmitter);
    }

    async onApplicationBootstrap() {
        const webhooks = await this.findAll();
        for (const webhook of webhooks) {
            this.eventHandler.subscribeWebhookEvent(webhook);
        }
    }

    async findAll(): Promise<Webhook[]> {
        return this.connection.rawConnection.getRepository(Webhook).find();
    }

    async findOne(ctx: RequestContext, id: string): Promise<Webhook | null> {
        const webhook = await this.connection.getRepository(ctx, Webhook).findOne({ where: { id } });
        if (!webhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        return webhook;
    }

    async create(ctx: RequestContext, input: CreateWebhookDto): Promise<Webhook> {
        const webhook = await this.connection.getRepository(ctx, Webhook).save({
            channelId: ctx.channelId,
            ...input,
        });

        this.eventHandler.subscribeWebhookEvent(webhook);
        return webhook;
    }

    async update(ctx: RequestContext, input: UpdateWebhookDto, id: string): Promise<Webhook> {
        const currentWebhook = await this.findOne(ctx, id);
        if (!currentWebhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        const updatedWebhook = await this.connection.getRepository(ctx, Webhook).save({
            ...input,
            id,
            channelId: ctx.channelId,
        });

        if (currentWebhook.event !== input.event) {
            this.eventHandler.unsubscribeWebhookEvent(currentWebhook.event, String(currentWebhook.id));
            this.eventHandler.subscribeWebhookEvent(updatedWebhook);
        }

        return updatedWebhook;
    }

    async delete(ctx: RequestContext, id: string): Promise<void> {
        const webhook = await this.findOne(ctx, id);
        if (!webhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        await this.connection.getRepository(ctx, Webhook).delete({ id });
        this.eventHandler.unsubscribeWebhookEvent(webhook.event, String(webhook.id));
    }
}
