import { Injectable } from '@nestjs/common';
import {
    CreateCustomerGroupInput,
    CustomerGroupListOptions,
    CustomerListOptions,
    DeletionResponse,
    DeletionResult,
    HistoryEntryType,
    MutationAddCustomersToGroupArgs,
    MutationRemoveCustomersFromGroupArgs,
    UpdateCustomerGroupInput,
} from '@shoplyjs/common/dist/generated-types';
import { ID, PaginatedList } from '@shoplyjs/common/dist/shared-types';

import { RequestContext } from '../../api/common/request-context';
import { RelationPaths } from '../../api/decorators/relations.decorator';
import { UserInputError } from '../../common/error/errors';
import { assertFound, idsAreEqual } from '../../common/utils';
import { TransactionalConnection } from '../../connection/transactional-connection';
import { Customer } from '../../entity/customer/customer.entity';
import { CustomerGroup } from '../../entity/customer-group/customer-group.entity';
import { CustomerGroupChangeEvent } from '../../event-bus/events/customer-group-change-event';
import { CustomerGroupEvent } from '../../event-bus/events/customer-group-event';
import { CustomFieldRelationService } from '../helpers/custom-field-relation/custom-field-relation.service';
import { ListQueryBuilder } from '../helpers/list-query-builder/list-query-builder';
import { patchEntity } from '../helpers/utils/patch-entity';

import { HistoryService } from './history.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventNames } from '@shoplyjs/common';

/**
 * @description
 * Contains methods relating to {@link CustomerGroup} entities.
 *
 * @docsCategory services
 */
@Injectable()
export class CustomerGroupService {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private historyService: HistoryService,
        private customFieldRelationService: CustomFieldRelationService,
        private eventEmitter: EventEmitter2,
    ) {}

    findAll(
        ctx: RequestContext,
        options?: CustomerGroupListOptions,
        relations: RelationPaths<CustomerGroup> = [],
    ): Promise<PaginatedList<CustomerGroup>> {
        return this.listQueryBuilder
            .build(CustomerGroup, options, { ctx, relations })
            .getManyAndCount()
            .then(([items, totalItems]) => ({ items, totalItems }));
    }

    findOne(
        ctx: RequestContext,
        customerGroupId: ID,
        relations: RelationPaths<CustomerGroup> = [],
    ): Promise<CustomerGroup | undefined> {
        return this.connection
            .getRepository(ctx, CustomerGroup)
            .findOne({ where: { id: customerGroupId }, relations })
            .then(result => result ?? undefined);
    }

    /**
     * @description
     * Returns a {@link PaginatedList} of all the Customers in the group.
     */
    getGroupCustomers(
        ctx: RequestContext,
        customerGroupId: ID,
        options?: CustomerListOptions,
    ): Promise<PaginatedList<Customer>> {
        return this.listQueryBuilder
            .build(Customer, options, { ctx })
            .leftJoin('customer.groups', 'group')
            .leftJoin('customer.channels', 'channel')
            .andWhere('group.id = :groupId', { groupId: customerGroupId })
            .andWhere('customer.deletedAt IS NULL', { groupId: customerGroupId })
            .andWhere('channel.id =:channelId', { channelId: ctx.channelId })
            .getManyAndCount()
            .then(([items, totalItems]) => ({ items, totalItems }));
    }

    async create(ctx: RequestContext, input: CreateCustomerGroupInput): Promise<CustomerGroup> {
        const customerGroup = new CustomerGroup(input);

        const newCustomerGroup = await this.connection.getRepository(ctx, CustomerGroup).save(customerGroup);
        if (input.customerIds) {
            const customers = await this.getCustomersFromIds(ctx, input.customerIds);
            for (const customer of customers) {
                customer.groups = [...(customer.groups || []), newCustomerGroup];
                await this.historyService.createHistoryEntryForCustomer({
                    ctx,
                    customerId: customer.id,
                    type: HistoryEntryType.CUSTOMER_ADDED_TO_GROUP,
                    data: {
                        groupName: customerGroup.name,
                    },
                });
            }
            await this.connection.getRepository(ctx, Customer).save(customers);
        }
        const savedCustomerGroup = await assertFound(this.findOne(ctx, newCustomerGroup.id));
        await this.customFieldRelationService.updateRelations(ctx, CustomerGroup, input, savedCustomerGroup);
        this.eventEmitter.emit(
            EventNames.CUSTOMER_GROUP_CREATED,
            new CustomerGroupEvent(ctx, savedCustomerGroup, 'created', input),
        );
        return assertFound(this.findOne(ctx, savedCustomerGroup.id));
    }

    async update(ctx: RequestContext, input: UpdateCustomerGroupInput): Promise<CustomerGroup> {
        const customerGroup = await this.connection.getEntityOrThrow(ctx, CustomerGroup, input.id);
        const updatedCustomerGroup = patchEntity(customerGroup, input);
        await this.connection.getRepository(ctx, CustomerGroup).save(updatedCustomerGroup, { reload: false });
        await this.customFieldRelationService.updateRelations(
            ctx,
            CustomerGroup,
            input,
            updatedCustomerGroup,
        );
        this.eventEmitter.emit(
            EventNames.CUSTOMER_GROUP_UPDATED,
            new CustomerGroupEvent(ctx, customerGroup, 'updated', input),
        );
        return assertFound(this.findOne(ctx, customerGroup.id));
    }

    async delete(ctx: RequestContext, id: ID): Promise<DeletionResponse> {
        const group = await this.connection.getEntityOrThrow(ctx, CustomerGroup, id);
        try {
            const deletedGroup = new CustomerGroup(group);
            await this.connection.getRepository(ctx, CustomerGroup).remove(group);
            this.eventEmitter.emit(
                EventNames.CUSTOMER_GROUP_DELETED,
                new CustomerGroupEvent(ctx, deletedGroup, 'deleted', id),
            );
            return {
                result: DeletionResult.DELETED,
            };
        } catch (e: any) {
            return {
                result: DeletionResult.NOT_DELETED,
                message: e.message,
            };
        }
    }

    async addCustomersToGroup(
        ctx: RequestContext,
        input: MutationAddCustomersToGroupArgs,
    ): Promise<CustomerGroup> {
        const customers = await this.getCustomersFromIds(ctx, input.customerIds);
        const group = await this.connection.getEntityOrThrow(ctx, CustomerGroup, input.customerGroupId);
        for (const customer of customers) {
            if (!customer.groups.map(g => g.id).includes(input.customerGroupId)) {
                customer.groups.push(group);
                await this.historyService.createHistoryEntryForCustomer({
                    ctx,
                    customerId: customer.id,
                    type: HistoryEntryType.CUSTOMER_ADDED_TO_GROUP,
                    data: {
                        groupName: group.name,
                    },
                });
            }
        }

        await this.connection.getRepository(ctx, Customer).save(customers, { reload: false });
        this.eventEmitter.emit(
            EventNames.CUSTOMER_GROUP_CHANGE_ASSIGNED,
            new CustomerGroupChangeEvent(ctx, customers, group, 'assigned'),
        );

        return assertFound(this.findOne(ctx, group.id));
    }

    async removeCustomersFromGroup(
        ctx: RequestContext,
        input: MutationRemoveCustomersFromGroupArgs,
    ): Promise<CustomerGroup> {
        const customers = await this.getCustomersFromIds(ctx, input.customerIds);
        const group = await this.connection.getEntityOrThrow(ctx, CustomerGroup, input.customerGroupId);
        for (const customer of customers) {
            if (!customer.groups.map(g => g.id).includes(input.customerGroupId)) {
                throw new UserInputError('error.customer-does-not-belong-to-customer-group');
            }
            customer.groups = customer.groups.filter(g => !idsAreEqual(g.id, group.id));
            await this.historyService.createHistoryEntryForCustomer({
                ctx,
                customerId: customer.id,
                type: HistoryEntryType.CUSTOMER_REMOVED_FROM_GROUP,
                data: {
                    groupName: group.name,
                },
            });
        }
        await this.connection.getRepository(ctx, Customer).save(customers, { reload: false });
        this.eventEmitter.emit(
            EventNames.CUSTOMER_GROUP_CHANGE_REMOVED,
            new CustomerGroupChangeEvent(ctx, customers, group, 'removed'),
        );
        return assertFound(this.findOne(ctx, group.id));
    }

    private getCustomersFromIds(ctx: RequestContext, ids: ID[]): Promise<Customer[]> | Customer[] {
        if (ids.length === 0) {
            return new Array<Customer>();
        } // TypeORM throws error when list is empty
        return this.connection
            .getRepository(ctx, Customer)
            .createQueryBuilder('customer')
            .leftJoin('customer.channels', 'channel')
            .leftJoinAndSelect('customer.groups', 'group')
            .where('customer.id IN (:...customerIds)', { customerIds: ids })
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .andWhere('customer.deletedAt is null')
            .getMany();
    }
}
