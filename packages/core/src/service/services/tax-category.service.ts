import { Injectable } from '@nestjs/common';
import {
    CreateTaxCategoryInput,
    DeletionResponse,
    DeletionResult,
    UpdateTaxCategoryInput,
} from '@shoplyjs/common/dist/generated-types';
import { ID, PaginatedList } from '@shoplyjs/common/dist/shared-types';

import { RequestContext } from '../../api/common/request-context';
import { EntityNotFoundError } from '../../common/error/errors';
import { ListQueryOptions } from '../../common/types/common-types';
import { assertFound } from '../../common/utils';
import { TransactionalConnection } from '../../connection/transactional-connection';
import { TaxCategory } from '../../entity/tax-category/tax-category.entity';
import { TaxRate } from '../../entity/tax-rate/tax-rate.entity';
import { TaxCategoryEvent } from '../../event-bus/events/tax-category-event';
import { ListQueryBuilder } from '../helpers/list-query-builder/list-query-builder';
import { patchEntity } from '../helpers/utils/patch-entity';
import { EventNames } from '@shoplyjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

/**
 * @description
 * Contains methods relating to {@link TaxCategory} entities.
 *
 * @docsCategory services
 */
@Injectable()
export class TaxCategoryService {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private eventEmitter: EventEmitter2,
    ) {}

    findAll(
        ctx: RequestContext,
        options?: ListQueryOptions<TaxCategory>,
    ): Promise<PaginatedList<TaxCategory>> {
        return this.listQueryBuilder
            .build(TaxCategory, options, { ctx })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
                items,
                totalItems,
            }));
    }

    findOne(ctx: RequestContext, taxCategoryId: ID): Promise<TaxCategory | undefined> {
        return this.connection
            .getRepository(ctx, TaxCategory)
            .findOne({ where: { id: taxCategoryId } })
            .then(result => result ?? undefined);
    }

    async create(ctx: RequestContext, input: CreateTaxCategoryInput): Promise<TaxCategory> {
        const taxCategory = new TaxCategory(input);
        if (input.isDefault === true) {
            await this.connection
                .getRepository(ctx, TaxCategory)
                .update({ isDefault: true }, { isDefault: false });
        }
        const newTaxCategory = await this.connection.getRepository(ctx, TaxCategory).save(taxCategory);
        this.eventEmitter.emit(
            EventNames.TAX_CATEGORY_CREATED,
            new TaxCategoryEvent(ctx, newTaxCategory, 'created', input),
        );

        return assertFound(this.findOne(ctx, newTaxCategory.id));
    }

    async update(ctx: RequestContext, input: UpdateTaxCategoryInput): Promise<TaxCategory> {
        const taxCategory = await this.findOne(ctx, input.id);
        if (!taxCategory) {
            throw new EntityNotFoundError('TaxCategory', input.id);
        }
        const updatedTaxCategory = patchEntity(taxCategory, input);
        if (input.isDefault === true) {
            await this.connection
                .getRepository(ctx, TaxCategory)
                .update({ isDefault: true }, { isDefault: false });
        }
        await this.connection.getRepository(ctx, TaxCategory).save(updatedTaxCategory, { reload: false });
        this.eventEmitter.emit(
            EventNames.TAX_CATEGORY_UPDATED,
            new TaxCategoryEvent(ctx, updatedTaxCategory, 'updated', input),
        );

        return assertFound(this.findOne(ctx, taxCategory.id));
    }

    async delete(ctx: RequestContext, id: ID): Promise<DeletionResponse> {
        const taxCategory = await this.connection.getEntityOrThrow(ctx, TaxCategory, id);
        const dependentRates = await this.connection
            .getRepository(ctx, TaxRate)
            .count({ where: { category: { id } } });

        if (0 < dependentRates) {
            const message = ctx.translate('message.cannot-remove-tax-category-due-to-tax-rates', {
                name: taxCategory.name,
                count: dependentRates,
            });
            return {
                result: DeletionResult.NOT_DELETED,
                message,
            };
        }

        try {
            const deletedTaxCategory = new TaxCategory(taxCategory);
            await this.connection.getRepository(ctx, TaxCategory).remove(taxCategory);
            this.eventEmitter.emit(
                EventNames.TAX_CATEGORY_DELETED,
                new TaxCategoryEvent(ctx, deletedTaxCategory, 'deleted', id),
            );

            return {
                result: DeletionResult.DELETED,
            };
        } catch (e: any) {
            return {
                result: DeletionResult.NOT_DELETED,
                message: e.toString(),
            };
        }
    }
}
