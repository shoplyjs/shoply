import { CreatePromotionInput, UpdatePromotionInput } from '@shoplyjs/common/dist/generated-types';
import { ID } from '@shoplyjs/common/dist/shared-types';

import { RequestContext } from '../../api/common/request-context';
import { Promotion } from '../../entity';
import { VendureEntityEvent } from '../vendure-entity-event';

type PromotionInputTypes = CreatePromotionInput | UpdatePromotionInput | ID;

/**
 * @description
 * This event is fired whenever a {@link Promotion} is added, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export class PromotionEvent extends VendureEntityEvent<Promotion, PromotionInputTypes> {
    constructor(
        ctx: RequestContext,
        entity: Promotion,
        type: 'created' | 'updated' | 'deleted',
        input?: PromotionInputTypes,
    ) {
        super(entity, type, ctx, input);
    }
}
