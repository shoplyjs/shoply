import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsObject, IsString, IsUrl, Max, MaxLength } from 'class-validator';
import { EventNames } from '@shoplyjs/common';

export class CreateWebhookDto {
    @ApiProperty({
        required: true,
        description: 'The event type that triggers the webhook.',
        example: 'product.created',
        enum: Object.values(EventNames),
    })
    @IsEnum(Object.values(EventNames), {
        message: 'event must be one of ProductEvent, OrderEvent, CustomerEvent',
    })
    @IsString({ message: 'event must be a string' })
    @MaxLength(255, { message: 'event must be less than 255 characters' })
    event: string;

    @ApiProperty({
        required: true,
        description: 'The URL to which the webhook will send requests.',
        example: 'https://example.com/webhook',
    })
    @IsUrl({}, { message: 'url must be a valid URL' })
    @MaxLength(2000, { message: 'url must be less than 2000 characters' })
    url: string;

    @ApiProperty({
        default: 'POST',
        example: 'POST',
        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'],
        description: 'The HTTP method used to send the webhook request.',
    })
    @IsEnum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'], {
        message: 'method must be one of GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE',
    })
    @MaxLength(10, { message: 'method must be less than 10 characters' })
    method: string;

    @ApiProperty({
        type: 'object',
        example: { 'Content-Type': 'application/json', Authorization: 'Bearer 123' },
        description: 'Custom headers to include in the webhook request.',
        properties: {},
    })
    @IsObject({ message: 'headers must be a valid object' })
    @Max(20, { message: 'headers must be less than 10 items' })
    headers: Record<string, string>;
}
