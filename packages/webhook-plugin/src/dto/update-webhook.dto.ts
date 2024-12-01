import { PartialType } from '@nestjs/swagger';

import { CreateWebhookDto } from './create-webhook.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateWebhookDto extends PartialType(CreateWebhookDto) {}
