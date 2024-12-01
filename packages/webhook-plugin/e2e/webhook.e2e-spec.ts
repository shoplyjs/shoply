import { createTestEnvironment, SqljsInitializer, testConfig } from '@shoplyjs/testing';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { WebhookPlugin } from '../src/webhook.plugin.js';
import gql from 'graphql-tag';
import { registerInitializer } from '@shoplyjs/testing';
import path from 'path';

const sqliteDataDir = path.join(__dirname, '__data__');

registerInitializer('sqljs', new SqljsInitializer(sqliteDataDir));

const CREATE_WEBHOOK = gql`
    mutation CreateWebhook($input: CreateWebhookInput!) {
        createWebhook(input: $input) {
            id
            event
            url
            method
            headers
        }
    }
`;

let sampleWebhook: any = null;

describe('Webhook GraphQL API', () => {
    const { server, adminClient } = createTestEnvironment({
        ...testConfig,
        plugins: [WebhookPlugin],
    });

    beforeAll(async () => {
        await server.init({
            logging: true,
        });
        await adminClient.asSuperAdmin(); // Log in as SuperAdmin
        sampleWebhook = (
            await adminClient.query(CREATE_WEBHOOK, {
                input: {
                    event: 'order.confirmed',
                    url: 'https://example.com/webhook',
                    method: 'POST',
                    headers: ['Authorization: Bearer token'],
                },
            })
        ).createWebhook;
    });

    afterAll(async () => {
        await server.destroy();
    });

    it('fetches all webhooks', async () => {
        const query = gql`
            query GetWebhooks {
                webhooks {
                    id
                    event
                    url
                    method
                    headers
                }
            }
        `;

        const result = await adminClient.query(query);

        expect(result.webhooks).toBeInstanceOf(Array);
        expect(result.webhooks.length).toBeGreaterThan(0);
        result.webhooks.forEach(webhook => {
            expect(webhook).toHaveProperty('id');
            expect(webhook).toHaveProperty('event');
            expect(webhook).toHaveProperty('url');
            expect(webhook).toHaveProperty('method');
            expect(webhook).toHaveProperty('headers');
        });
    });

    it('fetches a single webhook by ID', async () => {
        const query = gql`
            query GetWebhook($id: ID!) {
                webhook(id: $id) {
                    id
                    event
                    url
                    method
                    headers
                }
            }
        `;

        const result = await adminClient.query(query, { id: sampleWebhook.id });

        expect(result.webhook).toBeDefined();
        expect(result.webhook).toHaveProperty('id', sampleWebhook.id);
        expect(result.webhook).toHaveProperty('event');
        expect(result.webhook).toHaveProperty('url');
        expect(result.webhook).toHaveProperty('method');
        expect(result.webhook).toHaveProperty('headers');
    });

    it('creates a new webhook', async () => {
        const mutation = gql`
            mutation CreateWebhook($input: CreateWebhookInput!) {
                createWebhook(input: $input) {
                    id
                    event
                    url
                    method
                    headers
                }
            }
        `;

        const input = {
            event: 'Test Webhook',
            url: 'https://example.com/webhook',
            method: 'POST',
            headers: ['Authorization: Bearer token'],
        };

        const result = await adminClient.query(mutation, { input });

        expect(result.createWebhook).toBeDefined();
        expect(result.createWebhook).toHaveProperty('id');
        expect(result.createWebhook).toHaveProperty('event', input.event);
        expect(result.createWebhook).toHaveProperty('url', input.url);
        expect(result.createWebhook).toHaveProperty('method', input.method);
        expect(result.createWebhook.headers).toEqual(input.headers);
    });
});
