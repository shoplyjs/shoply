import { Expose } from 'class-transformer';

export class ResponseWebhookDto {
    @Expose()
    url: string;

    @Expose()
    status: string;
}
