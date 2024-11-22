import { Injectable } from '@nestjs/common';
import type { ListQueryOptions, PaginatedList, RequestContext } from '@shoplyjs/core';
import { ListQueryBuilder } from '@shoplyjs/core';
import { SupplierStockInTransit } from '../../entities/supplier-stock-in-transit.entity';

@Injectable()
export class SupplierStockInTransitService {
    constructor(private readonly listQueryBuilder: ListQueryBuilder) {}

    findAll(
        ctx: RequestContext,
        options?: ListQueryOptions<SupplierStockInTransit>,
    ): Promise<PaginatedList<SupplierStockInTransit>> {
        return this.listQueryBuilder
            .build(SupplierStockInTransit, options, {
                ctx,
                relations: ['supplierStock', 'supplierStock.productVariant'],
            })
            .getManyAndCount()
            .then(([items, totalItems]) => {
                return {
                    items,
                    totalItems,
                };
            });
    }
}
