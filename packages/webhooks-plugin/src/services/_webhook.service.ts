import { Injectable, OnApplicationBootstrap, OnApplicationShutdown, Type } from '@nestjs/common';
import { ChannelEvent, EntityNotFoundError, Logger, VendureEvent } from '@shoplyjs/core';
import { EventBus, RequestContext, TransactionalConnection } from '@shoplyjs/core';
import fetch from 'node-fetch';

import { Webhook } from '../entities/webhook.entity';
import { CreateWebhookInput, UpdateWebhookInput } from '@shoplyjs/common/lib/generated-types';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { WebhookEvent } from '../webhook.event';

@Injectable()
export class WebhookService implements OnApplicationBootstrap {
    constructor(
        private connection: TransactionalConnection,
        private eventBus: EventBus,
    ) {}

    onApplicationBootstrap() {
        this.eventBus.register(WebhookEvent);
        this.eventBus.register(ChannelEvent);
        this.subscribeWebhookEvent('WebhookEvent');
    }

    //     const webhooks = await this.findAll();
    //     const eventSubscriptions = this.groupWebhooksByEventType(webhooks);

    //     for (const [eventType, webhookList] of eventSubscriptions.entries()) {
    //         this.subscribeToEvent(eventType as any, webhookList);
    //     }
    // }

    async create(ctx: RequestContext, input: CreateWebhookDto): Promise<Webhook> {
        const webhook = await this.connection.getRepository(ctx, Webhook).save({
            channelId: ctx.channelId,
            ...input,
        });

        await this.eventBus.publish(new WebhookEvent(ctx, webhook, 'created'));
        return webhook;
    }

    async findAllByAdministrator(ctx: RequestContext): Promise<Webhook[]> {
        return this.connection.getRepository(ctx, Webhook).find({ where: { channelId: ctx.channelId } });
    }

    async findOne(ctx: RequestContext, id: string): Promise<Webhook | null> {
        const webhook = await this.connection.getRepository(ctx, Webhook).findOne({ where: { id } });
        if (!webhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        return webhook;
    }

    async update(ctx: RequestContext, input: UpdateWebhookDto, id: string): Promise<Webhook> {
        const currentWebhook = await this.findOne(ctx, id);
        if (!currentWebhook) {
            throw new EntityNotFoundError('Webhook', id);
        }
        const webhook = await this.connection.getRepository(ctx, Webhook).save({
            ...input,
            id,
            channelId: ctx.channelId,
        });

        await this.eventBus.publish(new WebhookEvent(ctx, currentWebhook, 'deleted'));
        await this.eventBus.publish(new WebhookEvent(ctx, input, 'created'));
        return webhook;
    }

    async delete(ctx: RequestContext, id: string): Promise<any> {
        const result = await this.connection.getRepository(ctx, Webhook).delete({ id });
        await this.eventBus.publish(new WebhookEvent(ctx, { id }, 'deleted'));
        return result;
    }

    async findAll(): Promise<Webhook[]> {
        return this.connection.getRepository(Webhook).find();
    }

    private subscribeWebhookEvent(eventType: string): void {
        this.eventBus.subscribe(eventType, async (event: VendureEvent) => {
            const { webhook, type } = event as unknown as {
                webhook: Webhook;
                type: string;
            };
            if (type === 'created') {
                this.subscribeCustomWebhookEvent(webhook, type);
            }

            if (type === 'deleted') {
                return;
            }
        });
    }

    private subscribeCustomWebhookEvent(webhook: Webhook, type: string): void {
        const eventName = `${webhook.event}:${webhook.id}`;
        this.eventBus.subscribe(webhook.event, async (webhookEvent: VendureEvent) => {
            Logger.info(
                `Successfully triggered webhook for event type ${webhook.event} at ${webhook.url}`,
                WebhookService.name,
            );
            try {
                await this.callRestWebhook(webhook);
            } catch (error) {
                Logger.error(
                    `Failed to process webhooks for event type ${type}: ${JSON.stringify(error)}`,
                    WebhookService.name,
                );
            }
        });
    }

    private unsubscribeCustomWebhookEvent(event: string): void {
        this.eventBus.unRegister(event);
    }

    private async callRestWebhook(webhook: CreateWebhookDto): Promise<void> {
        try {
            const payload = JSON.stringify({ webhook });
            const response = await fetch(webhook.url, {
                method: webhook.method,
                headers: webhook.headers,
                body: payload,
            });

            if (!response.ok) {
                throw new Error(`Webhook call failed with status: ${response.status}`);
            }

            Logger.info(
                `Successfully triggered webhook for event type ${webhook.event} at ${webhook.url}`,
                WebhookService.name,
            );
        } catch (error) {
            Logger.error(
                `Error calling webhook at ${webhook.url}: ${JSON.stringify(error)}`,
                WebhookService.name,
            );
        }
    }
}
