import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { ProductVariant, Translated } from '@shoplyjs/core';
import { assertFound, Ctx, RequestContext, ProductVariantService } from '@shoplyjs/core';
import { SupplierStock } from '../../../entities/supplier-stock.entity';

@Resolver('SupplierStock')
export class SupplierStockEntityResolver {
    constructor(private readonly productVariantService: ProductVariantService) {}

    @ResolveField()
    async productVariant(
        @Parent() supplierStock: SupplierStock,
        @Ctx() ctx: RequestContext,
    ): Promise<Translated<ProductVariant>> {
        return assertFound(this.productVariantService.findOne(ctx, supplierStock.productVariantId));
    }
}
