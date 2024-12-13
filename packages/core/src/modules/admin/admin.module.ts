import { Module } from '@nestjs/common';
import { AdministratorModule } from './administrator/administrator.module';
import { AssetModule } from './asset/asset.module';
import { PromotionModule } from './promotion/promotion.module';
import { TaxRateModule } from './tax-rate/tax-rate.module';
import { TaxCategoryModule } from './tax-category/tax-category.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { StockLocationModule } from './stock-location/stock-location.module';
import { CollectionModule } from './collection/collection.module';
import { OrderModule } from './order/order.module';
import { ZoneModule } from './zone/zone.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { CustomerGroupModule } from './customer-group/customer-group.module';
import { DraftOrderModule } from './draft-order/draft-order.module';
import { CountryModule } from './country/country.module';
import { CustomerModule } from './customer/customer.module';
import { SearchModule } from './search/search.module';
import { ChannelModule } from './channel/channel.module';
import { SellerModule } from './seller/seller.module';
import { ProductModule } from './product/product.module';
import { ProductOptionModule } from './product-option/product-option.module';
import { FacetModule } from './facet/facet.module';
import { ShippingMethodModule } from './shipping-method/shipping-method.module';
import { RoleModule } from './role/role.module';
import { DuplicateEntityModule } from './duplicate-entity/duplicate-entity.module';
import { ImportModule } from './import/import.module';
import { TagModule } from './tag/tag.module';
import { JobModule } from './job/job.module';
import { GlobalSettingsModule } from './global-settings/global-settings.module';

@Module({
    imports: [
        AdministratorModule,
        AssetModule,
        PromotionModule,
        TaxRateModule,
        TaxCategoryModule,
        PaymentMethodModule,
        StockLocationModule,
        CollectionModule,
        OrderModule,
        ZoneModule,
        AdminAuthModule,
        CustomerGroupModule,
        DraftOrderModule,
        CountryModule,
        CustomerModule,
        SearchModule,
        ChannelModule,
        SellerModule,
        ProductModule,
        ProductOptionModule,
        FacetModule,
        ShippingMethodModule,
        RoleModule,
        DuplicateEntityModule,
        ImportModule,
        TagModule,
        JobModule,
        GlobalSettingsModule,
    ],
})
export class AdminModule {}
