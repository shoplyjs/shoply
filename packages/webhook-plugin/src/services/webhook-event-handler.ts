import { EventEmitter2 } from '@nestjs/event-emitter';
import { Webhook } from '../entities/webhook.entity';
import fetch from 'node-fetch';
import { Logger } from '@shoplyjs/core';

export class WebhookEventHandler {
    private eventHandlers = new Map<string, (data: any) => void>();

    constructor(private eventEmitter: EventEmitter2) {}

    subscribeWebhookEvent(webhook: Webhook) {
        const eventHandler = (data: any) => {
            this.proceedWebhook(webhook, data).catch(err => err);
        };

        this.eventEmitter.on(webhook.event, eventHandler);
        this.eventHandlers.set(`${webhook.event}:${webhook.id}`, eventHandler);
    }

    unsubscribeWebhookEvent(eventType: string, webhookId: string) {
        const eventHandler = this.eventHandlers.get(`${eventType}:${webhookId}`);
        if (eventHandler) {
            this.eventEmitter.removeListener(eventType, eventHandler);
            this.eventHandlers.delete(`${eventType}:${webhookId}`);
            Logger.info(`Unsubscribed from event: ${eventType} for webhook ID: ${webhookId}`);
        } else {
            Logger.warn(`No event handler found for event: ${eventType} and webhook ID: ${webhookId}`);
        }
    }

    private async proceedWebhook(currentWebhook: Webhook, data: any) {
        if (String(data.ctx.channelId) !== String(currentWebhook.channelId)) return;

        if (currentWebhook.clientType === 'rest') {
            await this.callRestWebhook(currentWebhook, data);
        }
    }

    private async callRestWebhook(webhook: Webhook, data: any): Promise<void> {
        const { ctx, ...rest } = data || {};
        try {
            const payload = JSON.stringify({ data: rest || {} });
            const response = await fetch(webhook.url, {
                method: webhook.method,
                headers: webhook.headers,
                body: payload,
            });

            if (!response.ok) {
                throw new Error(`HTTP Request failed with status: ${response.status}`);
            }

            Logger.info(`Webhook triggered for ${webhook.event} at ${webhook.url}`, WebhookEventHandler.name);
        } catch (e: any) {
            Logger.warn(
                `Failed to trigger webhook for ${webhook.event} at ${webhook.url}: ${(e as Error).message}`,
                WebhookEventHandler.name,
            );
        }
    }
}
