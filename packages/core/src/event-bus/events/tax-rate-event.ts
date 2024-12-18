import { CreateTaxRateInput, UpdateTaxRateInput } from '@shoplyjs/common/dist/generated-types';
import { ID } from '@shoplyjs/common/dist/shared-types';

import { RequestContext } from '../../api/common/request-context';
import { TaxRate } from '../../entity';
import { VendureEntityEvent } from '../vendure-entity-event';

type TaxRateInputTypes = CreateTaxRateInput | UpdateTaxRateInput | ID;

/**
 * @description
 * This event is fired whenever a {@link TaxRate} is added, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export class TaxRateEvent extends VendureEntityEvent<TaxRate, TaxRateInputTypes> {
    constructor(
        ctx: RequestContext,
        entity: TaxRate,
        type: 'created' | 'updated' | 'deleted',
        input?: TaxRateInputTypes,
    ) {
        super(entity, type, ctx, input);
    }
}
