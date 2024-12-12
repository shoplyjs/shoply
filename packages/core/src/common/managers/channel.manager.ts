import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../api';
import { CachedSession } from '../../config';
import { ChannelService, CustomerService, SessionService } from '../../service';
import { Customer } from '../../entity';

@Injectable()
export class ChannelManager {
    constructor(
        private sessionService: SessionService,
        private customerService: CustomerService,
        private channelService: ChannelService,
    ) {}

    async setActiveChannel(requestContext: RequestContext, session?: CachedSession): Promise<boolean> {
        if (!session) {
            return false;
        }

        const activeChannelShouldBeSet =
            !session.activeChannelId || session.activeChannelId !== requestContext.channelId;

        if (!activeChannelShouldBeSet) {
            return false;
        }

        await this.sessionService.setActiveChannel(session, requestContext.channel);
        await this.assignCustomerToChannel(requestContext);
        return true;
    }

    private async assignCustomerToChannel(requestContext: RequestContext): Promise<void> {
        if (!requestContext.activeUserId) {
            return;
        }

        const customer = await this.customerService.findOneByUserId(
            requestContext,
            requestContext.activeUserId,
            false,
        );

        if (!customer) {
            return;
        }

        try {
            await this.channelService.assignToChannels(requestContext, Customer, customer.id, [
                requestContext.channelId,
            ]);
        } catch (e: any) {
            if (this.isDuplicateError(e)) {
                return;
            }
            throw e;
        }
    }

    private isDuplicateError(error: any): boolean {
        return error.code === 'ER_DUP_ENTRY' || error.code === '23505';
    }
}
