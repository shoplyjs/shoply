import { StockMovementType } from '@shoplyjs/common/dist/generated-types';
import { DeepPartial } from '@shoplyjs/common/dist/shared-types';
import { ChildEntity } from 'typeorm';

import { StockMovement } from './stock-movement.entity';

/**
 * @description
 * A StockAdjustment is created when the `stockOnHand` level of a ProductVariant is manually adjusted.
 *
 * @docsCategory entities
 * @docsPage StockMovement
 */
@ChildEntity()
export class StockAdjustment extends StockMovement {
    readonly type = StockMovementType.ADJUSTMENT;

    constructor(input: DeepPartial<StockAdjustment>) {
        super(input);
    }
}
