import { CreateTaxCategoryInput, UpdateTaxCategoryInput } from '@shoplyjs/common/dist/generated-types';
import { ID } from '@shoplyjs/common/dist/shared-types';

import { RequestContext } from '../../api/common/request-context';
import { TaxCategory } from '../../entity';
import { VendureEntityEvent } from '../vendure-entity-event';

type TaxCategoryInputTypes = CreateTaxCategoryInput | UpdateTaxCategoryInput | ID;

/**
 * @description
 * This event is fired whenever a {@link TaxCategory} is added, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export class TaxCategoryEvent extends VendureEntityEvent<TaxCategory, TaxCategoryInputTypes> {
    constructor(
        ctx: RequestContext,
        entity: TaxCategory,
        type: 'created' | 'updated' | 'deleted',
        input?: TaxCategoryInputTypes,
    ) {
        super(entity, type, ctx, input);
    }
}
