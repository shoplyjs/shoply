import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Allow, Ctx, Permission, RequestContext, Transaction } from '@shoplyjs/core';

import { Webhook } from '../entities/webhook.entity';
import { WebhookService } from '../services/webhook.service';

@Resolver()
export class WebhookResolver {
    constructor(private webhookService: WebhookService) {}

    @Query()
    @Allow(Permission.ReadAdministrator)
    webhooks(@Ctx() ctx: RequestContext): Promise<Webhook[]> {
        return this.webhookService.findAll();
    }

    @Query()
    @Allow(Permission.ReadAdministrator)
    webhook(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.webhookService.findOne(ctx, args.id);
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.CreateAdministrator)
    async createWebhook(@Ctx() ctx: RequestContext, @Args() args: any): Promise<Webhook> {
        const webhook = await this.webhookService.create(ctx, args.input);
        return webhook;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateAdministrator)
    async updateWebhook(@Ctx() ctx: RequestContext, @Args() args: any): Promise<Webhook> {
        const webhook = await this.webhookService.update(ctx, args.input, String(args.id));
        return webhook;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.DeleteAdministrator)
    async deleteWebhook(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.webhookService.delete(ctx, String(args.id));
    }
}
