import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Allow, Ctx, Permission, RequestContext } from '@shoplyjs/core';

import { WebhookService } from '../services/webhook.service';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { CreateWebhookDto } from '../dto/create-webhook.dto';
import { UpdateWebhookDto } from '../dto/update-webhook.dto';

@ApiBearerAuth('access-token')
@ApiHeader({
    name: 'vendure-token',
    example: 'h9o71qyipeqr404nka2',
    description: 'Authentication token required for login',
    required: true,
})
@Controller('webhooks')
export class WebhookController {
    constructor(private webhookService: WebhookService) {}

    @Get()
    @Allow(Permission.ReadAdministrator)
    getWebhooks(@Ctx() ctx: RequestContext) {
        return this.webhookService.findAll();
    }

    @Get(':id')
    @Allow(Permission.ReadAdministrator)
    getWebhook(@Param('id') id: string, @Ctx() ctx: RequestContext) {
        return this.webhookService.findOne(ctx, id);
    }

    @Post()
    @Allow(Permission.CreateAdministrator)
    createWebhook(@Body() body: CreateWebhookDto, @Ctx() ctx: RequestContext) {
        return this.webhookService.create(ctx, body);
    }

    @Put(':id')
    @Allow(Permission.UpdateAdministrator)
    updateWebhook(@Param('id') id: string, @Body() body: UpdateWebhookDto, @Ctx() ctx: RequestContext) {
        return this.webhookService.update(ctx, body, id);
    }

    @Delete(':id')
    @Allow(Permission.DeleteAdministrator)
    deleteWebhook(@Param('id') id: string, @Ctx() ctx: RequestContext) {
        return this.webhookService.delete(ctx, id);
    }
}
