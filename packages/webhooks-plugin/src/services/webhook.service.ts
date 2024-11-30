import { Injectable, OnApplicationBootstrap, OnApplicationShutdown, Type } from '@nestjs/common';
import { ChannelEvent, EntityNotFoundError, Logger, VendureEvent } from '@shoplyjs/core';
import { EventBus, RequestContext, TransactionalConnection } from '@shoplyjs/core';
import fetch from 'node-fetch';

import { Webhook } from '../entities/webhook.entity';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { WebhookEvent } from '../webhook.event';

@Injectable()
export class WebhookService implements OnApplicationBootstrap {
    constructor(
        private connection: TransactionalConnection,
        private eventEmitter: EventEmitter2,
    ) {}

    async onApplicationBootstrap() {
        const webhooks = await this.findAll();

        for (const webhook of webhooks) {
            const eventName = webhook.event;
            this.subscribeWebhookEvent(webhook);
        }
    }

    subscribeWebhookEvent(webhook: Webhook) {
        this.eventEmitter.on(webhook.event, data => {
            this.proceedWebhook(webhook, data).catch(err => err);
        });
    }

    async proceedWebhook(currentWebhook: Webhook, data: any) {
        if (String(data.ctx.channelId) !== String(currentWebhook.channelId)) return;
        if (currentWebhook.approach === 'rest') {
            await this.callRestWebhook(currentWebhook, data);
        }
    }

    async findAllByAdministrator(ctx: RequestContext): Promise<Webhook[]> {
        return this.connection.getRepository(ctx, Webhook).find({ where: { channelId: ctx.channelId } });
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

        this.eventEmitter.emit('webhook.created', new WebhookEvent(ctx, webhook, 'created'));
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

        // Re-subscribe if the event type has changed
        if (currentWebhook.event !== input.event) {
            this.unsubscribeCustomWebhookEvent(currentWebhook.event);
            const eventName = `${updatedWebhook.event}:${updatedWebhook.id}`;
            // this.subscribeWebhookEvent(eventName);
        }

        return updatedWebhook;
    }

    async delete(ctx: RequestContext, id: string): Promise<void> {
        const webhook = await this.findOne(ctx, id);
        if (!webhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        await this.connection.getRepository(ctx, Webhook).delete({ id });
        const eventName = `${webhook.event}:${webhook.id}`;
        this.unsubscribeCustomWebhookEvent(eventName);
    }

    @OnEvent('webhook.created')
    private onWebhookCreated({ webhook }: WebhookEvent) {
        this.subscribeWebhookEvent(webhook as Webhook);
    }

    // @OnEvent('*', { async: true })
    // private async subscribeWebhookEvent({ ctx }: any) {
    //     debugger;
    //     // const webhooks = await this.findWebhooksForEvent(eventType);
    //     // const { input } = (event || {}) as any;

    //     // for (const webhook of webhooks) {
    //     //     try {
    //     //         await this.callRestWebhook(webhook, input);
    //     //     } catch (error) {
    //     //         Logger.warn(
    //     //             `Failed to trigger webhook for ${eventType} at ${webhook.url}: ${JSON.stringify(error)}`,
    //     //             WebhookService.name,
    //     //         );
    //     //     }
    //     // }
    // }

    private unsubscribeCustomWebhookEvent(eventType: string): void {
        // this.eventBus.unRegister(eventType);
    }

    private async callRestWebhook(webhook: Webhook, data: any): Promise<void> {
        try {
            const payload = JSON.stringify({ data: data.input || {} });
            const response = await fetch(webhook.url, {
                method: webhook.method,
                headers: webhook.headers,
                body: payload,
            });

            if (!response.ok) {
                throw new Error(`HTTP Request failed with status: ${response.status}`);
            }

            Logger.info(`Webhook triggered for ${webhook.event} at ${webhook.url}`, WebhookService.name);
        } catch (e: any) {
            Logger.warn(
                `Failed to trigger webhook for ${webhook.event} at ${webhook.url}: ${e.message}`,
                WebhookService.name,
            );
            return;
        }
    }

    private async findWebhooksForEvent(eventType: string): Promise<Webhook[]> {
        return this.connection.getRepository(Webhook).find({ where: { event: eventType } });
    }
}
