import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { DeletionResponse } from '@shoplyjs/common/lib/generated-types';
import { Allow, Ctx, Permission, RequestContext, Transaction } from '@shoplyjs/core';

import { Webhook } from '../entities/webhook.entity';
import { WebhookService } from '../services/webhook.service';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';
import { CreateWebhookDto } from '../dto/create-webhook.dto';

@Resolver()
export class WebhookResolver {
    constructor(private webhookService: WebhookService) {}

    @Query()
    @Allow(Permission.ReadAdministrator)
    webhooks(@Ctx() ctx: RequestContext): Promise<Webhook[]> {
        return this.webhookService.findAllByAdministrator(ctx);
    }

    @Query()
    @Allow(Permission.ReadAdministrator)
    webhook(@Ctx() ctx: RequestContext): Promise<Webhook | null> {
        return this.webhookService.findOne(ctx, '123');
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.CreateAdministrator)
    async createWebhook(@Ctx() ctx: RequestContext, @Args() args: CreateWebhookDto): Promise<Webhook> {
        const webhook = await this.webhookService.create(ctx, args);
        return webhook;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateAdministrator)
    async updateWebhook(@Ctx() ctx: RequestContext, @Args() args: UpdateWebhookDto): Promise<Webhook> {
        const webhook = await this.webhookService.update(ctx, args, args.id);
        return webhook;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.DeleteAdministrator)
    async deleteWebhook(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.webhookService.delete(ctx, String(args.id));
    }
}
