import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EntityNotFoundError, Logger } from '@shoplyjs/core';
import { RequestContext, TransactionalConnection } from '@shoplyjs/core';
import fetch from 'node-fetch';

import { Webhook } from '../entities/webhook.entity';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { WebhookEvent } from '../webhook.event';

@Injectable()
export class WebhookService implements OnApplicationBootstrap {
    private eventHandlers = new Map<string, (data: any) => void>();

    constructor(
        private connection: TransactionalConnection,
        private eventEmitter: EventEmitter2,
    ) {}

    async onApplicationBootstrap() {
        const webhooks = await this.findAll();

        for (const webhook of webhooks) {
            this.subscribeWebhookEvent(webhook);
        }
    }

    subscribeWebhookEvent(webhook: Webhook) {
        const eventHandler = (data: any) => {
            this.proceedWebhook(webhook, data).catch(err => err);
        };

        this.eventEmitter.on(webhook.event, eventHandler);
        this.eventHandlers.set(`${webhook.event}:${webhook.id}`, eventHandler);
    }

    private unsubscribeCustomWebhookEvent(eventType: string, webhookId: string): void {
        const eventHandler = this.eventHandlers.get(`${eventType}:${webhookId}`);
        if (eventHandler) {
            this.eventEmitter.removeListener(eventType, eventHandler);
            this.eventHandlers.delete(`${eventType}:${webhookId}`);
            Logger.info(`Unsubscribed from event: ${eventType} for webhook ID: ${webhookId}`);
        } else {
            Logger.warn(`No event handler found for event: ${eventType} and webhook ID: ${webhookId}`);
        }
    }

    async proceedWebhook(currentWebhook: Webhook, data: any) {
        if (String(data.ctx.channelId) !== String(currentWebhook.channelId)) return;
        if (currentWebhook.clientType === 'rest') {
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

        this.subscribeWebhookEvent(webhook);
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
            this.unsubscribeCustomWebhookEvent(currentWebhook.event, String(currentWebhook.id));
            this.subscribeWebhookEvent(updatedWebhook);
        }

        return updatedWebhook;
    }

    async delete(ctx: RequestContext, id: string): Promise<void> {
        const webhook = await this.findOne(ctx, id);
        if (!webhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        await this.connection.getRepository(ctx, Webhook).delete({ id });
        this.unsubscribeCustomWebhookEvent(webhook.event, String(webhook.id));
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
                `Failed to trigger webhook for ${webhook.event} at ${webhook.url}: ${(e as Error).message}`,
                WebhookService.name,
            );
            return;
        }
    }
}
