import { StockMovementType } from '@shoplyjs/common/dist/generated-types';
import { DeepPartial } from '@shoplyjs/common/dist/shared-types';
import { ChildEntity, ManyToOne } from 'typeorm';

import { OrderLine } from '../order-line/order-line.entity';

import { StockMovement } from './stock-movement.entity';

/**
 * @description
 * A Cancellation is created when OrderItems from a fulfilled Order are cancelled.
 *
 * @docsCategory entities
 * @docsPage StockMovement
 */
@ChildEntity()
export class Cancellation extends StockMovement {
    readonly type = StockMovementType.CANCELLATION;

    constructor(input: DeepPartial<Cancellation>) {
        super(input);
    }

    // @Index() omitted as it would conflict with the orderLineId index from the Allocation entity
    @ManyToOne(type => OrderLine, orderLine => orderLine.cancellations)
    orderLine: OrderLine;
}
