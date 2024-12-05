import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeIdToUuid1733358904515 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.query(
            `ALTER TABLE "facet_translation" DROP CONSTRAINT "FK_eaea53f44bf9e97790d38a3d68f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" DROP CONSTRAINT "PK_a6902cc1dcbb5e52a980f0189ad"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" ADD CONSTRAINT "PK_a6902cc1dcbb5e52a980f0189ad" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_eaea53f44bf9e97790d38a3d68"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "FK_ca796020c6d097e251e5d6d2b02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" DROP CONSTRAINT "FK_d101dc2265a7341be3d94968c5b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet" DROP CONSTRAINT "PK_a0ebfe3c68076820c6886aa9ff3"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet" ADD CONSTRAINT "PK_a0ebfe3c68076820c6886aa9ff3" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_06b02fb482b188823e419d37bd4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_22b818af8722746fb9f206068c2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_7d57857922dfc7303604697dbe9"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_30019aa65b17fe9ee9628931991"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "PK_21891d07accb8fa87e11165bca2"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "PK_21891d07accb8fa87e11165bca2" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_06b02fb482b188823e419d37bd"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "fulfillmentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "fulfillmentId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_22b818af8722746fb9f206068c"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "modificationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "modificationId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7d57857922dfc7303604697dbe"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "orderLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "orderLineId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_30019aa65b17fe9ee962893199"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "refundId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "refundId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "FK_4add5a5796e1582dec2877b2898"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "fulfillment" DROP CONSTRAINT "PK_50c102da132afffae660585981f"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "fulfillment" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "fulfillment" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "fulfillment" ADD CONSTRAINT "PK_50c102da132afffae660585981f" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_cb66b63b6e97613013795eadbd5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" DROP CONSTRAINT "FK_1c6932a756108788a361e7d4404"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" DROP CONSTRAINT "PK_f1cefa2e60d99b206c46c1116e5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "refund" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "refund" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" ADD CONSTRAINT "PK_f1cefa2e60d99b206c46c1116e5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_1c6932a756108788a361e7d440"`, undefined);
        await queryRunner.query(`ALTER TABLE "refund" DROP COLUMN "paymentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "refund" ADD "paymentId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_ad2991fa2933ed8b7f86a716338"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP CONSTRAINT "FK_d09d285fe1645cd2f0db811e293"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_d09d285fe1645cd2f0db811e29"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD "orderId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "FK_154eb685f9b629033bd266df7fa"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "FK_a49c5271c39cc8174a0535c8088"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "PK_a62b89257bcc802b5d77346f432"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "PK_a62b89257bcc802b5d77346f432" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_154eb685f9b629033bd266df7f"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" ADD "orderId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a49c5271c39cc8174a0535c808"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "orderModificationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" ADD "orderModificationId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_1df5bc14a47ef24d2e681f45598"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "PK_cccf2e1612694eeb1e5b6760ffa"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "PK_cccf2e1612694eeb1e5b6760ffa" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_1df5bc14a47ef24d2e681f4559"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "orderId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "REL_ad2991fa2933ed8b7f86a71633"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "paymentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "paymentId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "UQ_ad2991fa2933ed8b7f86a716338" UNIQUE ("paymentId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "REL_cb66b63b6e97613013795eadbd"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "refundId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "refundId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "UQ_cb66b63b6e97613013795eadbd5" UNIQUE ("refundId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" DROP CONSTRAINT "FK_1cc009e9ab2263a35544064561b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" DROP CONSTRAINT "PK_0b4fd34d2fc7abc06189494a178"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "promotion_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" ADD CONSTRAINT "PK_0b4fd34d2fc7abc06189494a178" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_1cc009e9ab2263a35544064561"`, undefined);
        await queryRunner.query(`ALTER TABLE "promotion_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "promotion_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "FK_2c26b988769c0e3b0120bdef31b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "FK_6d9e2c39ab12391aaa374bcdaa4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion" DROP CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion" ADD CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" DROP CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" DROP CONSTRAINT "PK_b862a1fac1c6e1fd201eadadbcb"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD CONSTRAINT "PK_b862a1fac1c6e1fd201eadadbcb" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_85ec26c71067ebc84adcd98d1a"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "FK_e2e7642e1e88167c1dfc827fdf3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "FK_f0a17b94aa5a162f0d422920eb2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method" DROP CONSTRAINT "PK_b9b0adfad3c6b99229c1e7d4865"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method" ADD CONSTRAINT "PK_b9b0adfad3c6b99229c1e7d4865" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_dc9ac68b47da7b62249886affba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "FK_c9f34a440d490d1b66f6829b86c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "PK_890522bfc44a4b6eb7cb1e52609"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "PK_890522bfc44a4b6eb7cb1e52609" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e2e7642e1e88167c1dfc827fdf"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "shippingMethodId"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" ADD "shippingMethodId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9f34a440d490d1b66f6829b86"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" ADD "orderId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_73a78d7df09541ac5eba620d181"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_0d8e5c204480204a60e151e4853"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "FK_f80d84d525af2ffe974e7e8ca29"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_239cfca2a55b98b90b6bef2e44f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "FK_67be0e40122ab30a62a9817efe0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_7a75399a4f4ffa48ee02e98c059"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_73a78d7df09541ac5eba620d18"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "aggregateOrderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "aggregateOrderId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_124456e637cca7a415897dce65"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "customerId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "taxZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "taxZoneId" character varying`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "FK_984c48572468c69661a0b7b0494"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "FK_39513fd02a573c848d23bee587d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location" DROP CONSTRAINT "PK_adf770067d0df1421f525fa25cc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_location" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_location" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location" ADD CONSTRAINT "PK_adf770067d0df1421f525fa25cc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_e65ba3882557cab4febb54809bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "PK_9fe1232f916686ae8cf00294749"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "PK_9fe1232f916686ae8cf00294749" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a2fe7172eeae9f1cca86f8f573"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "stockLocationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "stockLocationId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e65ba3882557cab4febb54809b"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "productVariantId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d2c8d5fca981cc820131f81aa8"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "orderLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "orderLineId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_77be94ce9ec6504466179462275"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_e38dca0d82fd64c7cf8aac8b8ef"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_7ee3306d7638aa85ca90d672198"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_category" DROP CONSTRAINT "PK_2432988f825c336d5584a96cded"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_category" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tax_category" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_category" ADD CONSTRAINT "PK_2432988f825c336d5584a96cded" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_6901d8715f5ebadd764466f7bde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_cbcd22193eda94668e84d33f185"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_9f065453910ea77d4be8e92618f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "PK_01a7c973d9f30479647e44f9892"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "PK_01a7c973d9f30479647e44f9892" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_6901d8715f5ebadd764466f7bd"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "sellerChannelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "sellerChannelId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc9ac68b47da7b62249886affb"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "shippingLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "shippingLineId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_cbcd22193eda94668e84d33f18"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "productVariantId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_77be94ce9ec650446617946227"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "taxCategoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "taxCategoryId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f065453910ea77d4be8e92618"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "featuredAssetId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_239cfca2a55b98b90b6bef2e44"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "orderId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP CONSTRAINT "FK_93751abc1451972c02e033b766c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP CONSTRAINT "PK_44ab19f118175288dff147c4a00"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_group_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD CONSTRAINT "PK_44ab19f118175288dff147c4a00" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_93751abc1451972c02e033b766"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP COLUMN "baseId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD "baseId" uuid`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" DROP CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" DROP CONSTRAINT "FK_a6e91739227bf4d442f23c52c75"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" DROP CONSTRAINT "PK_d76e92fdbbb5a2e6752ffd4a2c1"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_group" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" ADD CONSTRAINT "PK_d76e92fdbbb5a2e6752ffd4a2c1" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a6e91739227bf4d442f23c52c7"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_group" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_group" ADD "productId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" DROP CONSTRAINT "FK_a79a443c1f7841f3851767faa6d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" DROP CONSTRAINT "PK_69c79a84baabcad3c7328576ac0"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD CONSTRAINT "PK_69c79a84baabcad3c7328576ac0" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a79a443c1f7841f3851767faa6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "FK_e96a71affe63c97f7fa2f076dac"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" DROP CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" ADD CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a6debf9198e2fbfa006aa10d71"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option" DROP COLUMN "groupId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option" ADD "groupId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "FK_9950eae3180f39c71978748bd08"`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_7fc20486b8cfd33dc84c96e168"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "PK_88ff7d9dfb57dc9d435e365eb69"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "PK_88ff7d9dfb57dc9d435e365eb69" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_9950eae3180f39c71978748bd0"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_level" ADD "productVariantId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_984c48572468c69661a0b7b049"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "stockLocationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_level" ADD "stockLocationId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "FK_10b5a2e3dee0e30b1e26c32f5c7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "FK_fa21412afac15a2304f3eb35feb"`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_10b5a2e3dee0e30b1e26c32f5c"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_asset" ADD "assetId" uuid NOT NULL`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_fa21412afac15a2304f3eb35fe"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD "productVariantId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "PK_cb1e33ae13779da176f8b03a5d3"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "PK_cb1e33ae13779da176f8b03a5d3" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" DROP CONSTRAINT "FK_e6126cd268aea6e9b31d89af9ab"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" DROP CONSTRAINT "PK_ba659ff2940702124e799c5c854"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD CONSTRAINT "PK_ba659ff2940702124e799c5c854" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD "channelId" character varying`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e6126cd268aea6e9b31d89af9a"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "variantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ADD "variantId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" DROP CONSTRAINT "FK_420f4d6fb75d38b9dca79bc43b4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" DROP CONSTRAINT "PK_4b7f882e2b669800bed7ed065f0"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD CONSTRAINT "PK_4b7f882e2b669800bed7ed065f0" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_420f4d6fb75d38b9dca79bc43b"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "FK_fb05887e2867365f236d7dd95ee"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "FK_beeb2b3cd800e589f2213ae99d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "FK_69567bc225b6bbbd732d6c5455b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "FK_526f0131260eec308a3bd2b61b6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_6e420052844edf3a5506d863ce6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_0e6f516053cf982b537836e21cf"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_6e420052844edf3a5506d863ce"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "productId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0e6f516053cf982b537836e21c"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "featuredAssetId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e38dca0d82fd64c7cf8aac8b8e"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "taxCategoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "taxCategoryId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" DROP CONSTRAINT "FK_3d6e45823b65de808a66cb1423b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" DROP CONSTRAINT "PK_a09fdeb788deff7a9ed827a6160"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" ADD CONSTRAINT "PK_a09fdeb788deff7a9ed827a6160" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_3d6e45823b65de808a66cb1423"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "FK_ad690c1b05596d7f52e52ffeedd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "FK_06e7d73673ee630e8ec50d0b29f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "FK_0d641b761ed1dce4ef3cd33d559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" DROP CONSTRAINT "PK_d231e8eecc7e1a6059e1da7d325"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" ADD CONSTRAINT "PK_d231e8eecc7e1a6059e1da7d325" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_d101dc2265a7341be3d94968c5"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value" DROP COLUMN "facetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value" ADD "facetId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "FK_5888ac17b317b93378494a10620"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "FK_0d1294f5c22a56da7845ebab72c"`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_5888ac17b317b93378494a1062"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" ADD "assetId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d1294f5c22a56da7845ebab72"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" ADD "productId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "PK_c56a83efd14ec4175532e1867fc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "PK_c56a83efd14ec4175532e1867fc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" DROP CONSTRAINT "FK_7dbc75cb4e8b002620c4dbfdac5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" DROP CONSTRAINT "PK_62d00fbc92e7a495701d6fee9d5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" ADD CONSTRAINT "PK_62d00fbc92e7a495701d6fee9d5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_7dbc75cb4e8b002620c4dbfdac"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "FK_26d12be3b5fec6c4adb1d792844"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "FK_6a0558e650d75ae639ff38e413a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" DROP CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_91a19e6613534949a4ce6e76ff"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "featuredAssetId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "FK_fb5e800171ffbe9823f2cc727fd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tag" DROP CONSTRAINT "PK_8e4052373c579afc1471f526760"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tag" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tag" ADD CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "FK_dc4e7435f9f5e9e6436bebd33bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "FK_9e412b00d4c6cee1a4b3d920716"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "FK_7256fef1bb42f1b38156b7449f5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "FK_51da53b26522dc0525762d2de8e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset" DROP CONSTRAINT "PK_1209d107fe21482beaea51b745e"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset" ADD CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "FK_1ed9e48dfbf74b5fcbb35d3d686"`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_51da53b26522dc0525762d2de8"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" ADD "assetId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1ed9e48dfbf74b5fcbb35d3d68"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "collectionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" ADD "collectionId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "PK_a2adab6fd086adfb7858f1f110c"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "PK_a2adab6fd086adfb7858f1f110c" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" DROP CONSTRAINT "FK_e329f9036210d75caa1d8f2154a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" DROP CONSTRAINT "PK_bb49cfcde50401eb5f463a84dac"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" ADD CONSTRAINT "PK_bb49cfcde50401eb5f463a84dac" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e329f9036210d75caa1d8f2154"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "FK_4257b61275144db89fa0f5dc059"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "FK_cdbf33ffb5d4519161251520083"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "FK_457784c710f8ac9396010441f6c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "FK_6faa7b72422d9c4679e2f186ad1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "parentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" ADD "parentId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7256fef1bb42f1b38156b7449f"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" ADD "featuredAssetId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "FK_af2116c7e176b6b88dceceeb74b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "FK_9e4a35ccd6c947cf154d6402c2a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "seller" DROP CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "seller" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "seller" ADD CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" DROP CONSTRAINT "FK_1afd722b943c81310705fc3e612"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" DROP CONSTRAINT "PK_3e0c9619cafbe579eeecfd88abc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "region_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" ADD CONSTRAINT "PK_3e0c9619cafbe579eeecfd88abc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_1afd722b943c81310705fc3e61"`, undefined);
        await queryRunner.query(`ALTER TABLE "region_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "region_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "FK_d87215343c3a3a67e6a0b7f3ea9"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" DROP CONSTRAINT "FK_ed0c8098ce6809925a437f42aec"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "FK_b45b65256486a15a104e17d495c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" DROP CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "region" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" ADD CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_ed0c8098ce6809925a437f42ae"`, undefined);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "parentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "region" ADD "parentId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "FK_85feea3f0e5e82133605f78db02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_group" DROP CONSTRAINT "PK_88e7da3ff7262d9e0a35aa3664e"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer_group" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_group" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_group" ADD CONSTRAINT "PK_88e7da3ff7262d9e0a35aa3664e" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "PK_23b71b53f650c0b39e99ccef4fd"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "PK_23b71b53f650c0b39e99ccef4fd" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_7ee3306d7638aa85ca90d67219"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "categoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "categoryId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9872fc7de2f4e532fd3230d191"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "zoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "zoneId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b5ab52fc8887c1a769b9276ca"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "customerGroupId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "customerGroupId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "FK_afe9f917a1c82b9e9e69f7c6129"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "FK_433f45158e4e2b2a2f344714b22"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone" DROP CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "zone" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "zone" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone" ADD CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "FK_651689c2776497f2edf049b6473"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "FK_16ca9151a5153f1169da5b7b7e3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "FK_7216ab24077cf5cbece7857dbbd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "FK_2a8ea404d05bf682516184db7d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "FK_e1d54c0b9db3e2eb17faaf5919c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_d0d16db872499e83b15999f8c7a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "FK_c00e36f667d35031087b382e61b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "FK_a51dfbd87c330c075c39832b6e7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "FK_d194bff171b62357688a5d0f559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "FK_0eaaf0f4b6c69afde1e88ffb52d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "FK_e09dfee62b158307404202b43a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_eb87ef1e234444728138302263b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "FK_f2b98dfb56685147bed509acc3d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "FK_ff8150fe54e56a900d5712671a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "PK_590f33ee6ee7d76437acf362e39"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "channel" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_af2116c7e176b6b88dceceeb74"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "sellerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "sellerId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_afe9f917a1c82b9e9e69f7c612"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "defaultTaxZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "defaultTaxZoneId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9ca2f58d4517460435cbd8b4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "defaultShippingZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "defaultShippingZoneId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "authentication_method" DROP CONSTRAINT "FK_00cbe87bc0d4e36758d61bd31d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" DROP CONSTRAINT "PK_e204686018c3c60f6164e385081"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "authentication_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "authentication_method" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" ADD CONSTRAINT "PK_e204686018c3c60f6164e385081" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_00cbe87bc0d4e36758d61bd31d"`, undefined);
        await queryRunner.query(`ALTER TABLE "authentication_method" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "authentication_method" ADD "userId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "FK_bfd2a03e9988eda6a9d11760119"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role" DROP CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role" ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "session" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_7a75399a4f4ffa48ee02e98c05"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "activeOrderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "activeOrderId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb87ef1e234444728138302263"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "activeChannelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "activeChannelId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d2f174ef04fb312fdebd0ddc5"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "userId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "FK_3f62b42ed23958b120c235f74df"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "FK_1966e18ce6a39a82b19204704d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_43ac602f839847fdb91101f30ec"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "FK_b823a3c8bf3b78d3ed68736485c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "REL_3f62b42ed23958b120c235f74d"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "userId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "UQ_3f62b42ed23958b120c235f74df" UNIQUE ("userId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "address" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_dc34d382b493ade1f70e834c4d"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customerId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d87215343c3a3a67e6a0b7f3ea"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "countryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "countryId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "global_settings" DROP CONSTRAINT "PK_fec5e2c0bf238e30b25d4a82976"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "global_settings" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "global_settings" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "global_settings" ADD CONSTRAINT "PK_fec5e2c0bf238e30b25d4a82976" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" DROP CONSTRAINT "FK_66187f782a3e71b9e0f5b50b68b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" DROP CONSTRAINT "PK_ae5ae0af71ae8d15da9eb75768b"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment_method_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD CONSTRAINT "PK_ae5ae0af71ae8d15da9eb75768b" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_66187f782a3e71b9e0f5b50b68"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment_method_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment_method_translation" ADD "baseId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "FK_5bcb569635ce5407eb3f264487d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method" DROP CONSTRAINT "PK_7744c2b2dd932c9cf42f2b9bc3a"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method" ADD CONSTRAINT "PK_7744c2b2dd932c9cf42f2b9bc3a" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "FK_f5a1624b4e31b5f16c13690ed69"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_92f8c334ef06275f9586fd01832"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "PK_ee58e71b3b4008b20ddc7b3092b"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "PK_ee58e71b3b4008b20ddc7b3092b" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "REL_1966e18ce6a39a82b19204704d"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "userId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "UQ_1966e18ce6a39a82b19204704d7" UNIQUE ("userId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "sellerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "sellerId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "PK_b65bd95b0d2929668589d57b97a"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "PK_b65bd95b0d2929668589d57b97a" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_92f8c334ef06275f9586fd0183"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "administratorId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "administratorId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_43ac602f839847fdb91101f30e"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "customerId" uuid`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a05127e67435b4d2332ded7c9"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "orderId" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_6470dd173311562c89e5f80b30e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_b9cb3bc644b0725bbd40f1fc537" PRIMARY KEY ("languageCode", "channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productVariantId" character varying NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_b9cb3bc644b0725bbd40f1fc537"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_6470dd173311562c89e5f80b30e" PRIMARY KEY ("languageCode", "channelId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_6470dd173311562c89e5f80b30e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_15b7ccffbd4e81c360c4db89977" PRIMARY KEY ("languageCode", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "channelId" character varying NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_15b7ccffbd4e81c360c4db89977"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_6470dd173311562c89e5f80b30e" PRIMARY KEY ("languageCode", "productVariantId", "channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productId" character varying NOT NULL`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productAssetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productAssetId" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP COLUMN "productVariantAssetId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productVariantAssetId" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "job_record" DROP CONSTRAINT "PK_88ce3ea0c9dca8b571450b457a7"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "job_record" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "job_record" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "job_record" ADD CONSTRAINT "PK_88ce3ea0c9dca8b571450b457a7" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "webhook" DROP CONSTRAINT "PK_e6765510c2d078db49632b59020"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "webhook" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "webhook" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "webhook" ADD CONSTRAINT "PK_e6765510c2d078db49632b59020" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_df0579886093b2f830c159adfde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_2a8ea404d05bf682516184db7d3" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_ca796020c6d097e251e5d6d2b0"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_channels_channel" DROP COLUMN "facetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD "facetId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_2a8ea404d05bf682516184db7d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_df0579886093b2f830c159adfde" PRIMARY KEY ("channelId", "facetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_df0579886093b2f830c159adfde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_ca796020c6d097e251e5d6d2b02" PRIMARY KEY ("facetId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_2a8ea404d05bf682516184db7d"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_ca796020c6d097e251e5d6d2b02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_df0579886093b2f830c159adfde" PRIMARY KEY ("facetId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_0eaaf0f4b6c69afde1e88ffb52d" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_6d9e2c39ab12391aaa374bcdaa"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP COLUMN "promotionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD "promotionId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_0eaaf0f4b6c69afde1e88ffb52d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23" PRIMARY KEY ("channelId", "promotionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_6d9e2c39ab12391aaa374bcdaa4" PRIMARY KEY ("promotionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_0eaaf0f4b6c69afde1e88ffb52"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_6d9e2c39ab12391aaa374bcdaa4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23" PRIMARY KEY ("promotionId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_f2b98dfb56685147bed509acc3d" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_f0a17b94aa5a162f0d422920eb"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP COLUMN "shippingMethodId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD "shippingMethodId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_f2b98dfb56685147bed509acc3d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6" PRIMARY KEY ("channelId", "shippingMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_f0a17b94aa5a162f0d422920eb2" PRIMARY KEY ("shippingMethodId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_f2b98dfb56685147bed509acc3"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_f0a17b94aa5a162f0d422920eb2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6" PRIMARY KEY ("shippingMethodId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_2c26b988769c0e3b0120bdef31b" PRIMARY KEY ("promotionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_67be0e40122ab30a62a9817efe"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_promotions_promotion" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD "orderId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_2c26b988769c0e3b0120bdef31b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92" PRIMARY KEY ("promotionId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_67be0e40122ab30a62a9817efe0" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_2c26b988769c0e3b0120bdef31"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP COLUMN "promotionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD "promotionId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_67be0e40122ab30a62a9817efe0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92" PRIMARY KEY ("orderId", "promotionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_414600087d71aee1583bc517590"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_4add5a5796e1582dec2877b2898" PRIMARY KEY ("fulfillmentId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_f80d84d525af2ffe974e7e8ca2"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP COLUMN "orderId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD "orderId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_4add5a5796e1582dec2877b2898"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_414600087d71aee1583bc517590" PRIMARY KEY ("fulfillmentId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_414600087d71aee1583bc517590"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_f80d84d525af2ffe974e7e8ca29" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_4add5a5796e1582dec2877b289"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP COLUMN "fulfillmentId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD "fulfillmentId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_f80d84d525af2ffe974e7e8ca29"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_414600087d71aee1583bc517590" PRIMARY KEY ("orderId", "fulfillmentId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_39853134b20afe9dfb25de18292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_d0d16db872499e83b15999f8c7a" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_0d8e5c204480204a60e151e485"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD "orderId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_d0d16db872499e83b15999f8c7a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_39853134b20afe9dfb25de18292" PRIMARY KEY ("channelId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_39853134b20afe9dfb25de18292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_0d8e5c204480204a60e151e4853" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_d0d16db872499e83b15999f8c7"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_0d8e5c204480204a60e151e4853"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_39853134b20afe9dfb25de18292" PRIMARY KEY ("orderId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_ff8150fe54e56a900d5712671a0" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_39513fd02a573c848d23bee587"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP COLUMN "stockLocationId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD "stockLocationId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_ff8150fe54e56a900d5712671a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0" PRIMARY KEY ("channelId", "stockLocationId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_39513fd02a573c848d23bee587d" PRIMARY KEY ("stockLocationId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_ff8150fe54e56a900d5712671a"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_39513fd02a573c848d23bee587d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0" PRIMARY KEY ("stockLocationId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_c57de5cb6bb74504180604a00c0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_e96a71affe63c97f7fa2f076dac" PRIMARY KEY ("productOptionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_526f0131260eec308a3bd2b61b"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD "productVariantId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_e96a71affe63c97f7fa2f076dac"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_c57de5cb6bb74504180604a00c0" PRIMARY KEY ("productOptionId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_c57de5cb6bb74504180604a00c0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_526f0131260eec308a3bd2b61b6" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e96a71affe63c97f7fa2f076da"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP COLUMN "productOptionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD "productOptionId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_526f0131260eec308a3bd2b61b6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_c57de5cb6bb74504180604a00c0" PRIMARY KEY ("productVariantId", "productOptionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_a28474836b2feeffcef98c806e1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_0d641b761ed1dce4ef3cd33d559" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_69567bc225b6bbbd732d6c5455"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD "productVariantId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_0d641b761ed1dce4ef3cd33d559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_a28474836b2feeffcef98c806e1" PRIMARY KEY ("facetValueId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_a28474836b2feeffcef98c806e1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_69567bc225b6bbbd732d6c5455b" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_0d641b761ed1dce4ef3cd33d55"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD "facetValueId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_69567bc225b6bbbd732d6c5455b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_a28474836b2feeffcef98c806e1" PRIMARY KEY ("productVariantId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_d194bff171b62357688a5d0f559" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_beeb2b3cd800e589f2213ae99d"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD "productVariantId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_d194bff171b62357688a5d0f559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191" PRIMARY KEY ("channelId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_beeb2b3cd800e589f2213ae99d6" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_d194bff171b62357688a5d0f55"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_beeb2b3cd800e589f2213ae99d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191" PRIMARY KEY ("productVariantId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_653fb72a256f100f52c573e419f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_e1d54c0b9db3e2eb17faaf5919c" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_ad690c1b05596d7f52e52ffeed"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD "facetValueId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_e1d54c0b9db3e2eb17faaf5919c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_653fb72a256f100f52c573e419f" PRIMARY KEY ("channelId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_653fb72a256f100f52c573e419f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_ad690c1b05596d7f52e52ffeedd" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e1d54c0b9db3e2eb17faaf5919"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_ad690c1b05596d7f52e52ffeedd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_653fb72a256f100f52c573e419f" PRIMARY KEY ("facetValueId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_d57f06b38805181019d75662aa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_06e7d73673ee630e8ec50d0b29f" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_6a0558e650d75ae639ff38e413"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP COLUMN "productId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD "productId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_06e7d73673ee630e8ec50d0b29f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_d57f06b38805181019d75662aa6" PRIMARY KEY ("facetValueId", "productId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_d57f06b38805181019d75662aa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_6a0558e650d75ae639ff38e413a" PRIMARY KEY ("productId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_06e7d73673ee630e8ec50d0b29"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD "facetValueId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_6a0558e650d75ae639ff38e413a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_d57f06b38805181019d75662aa6" PRIMARY KEY ("productId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_722acbcc06403e693b518d2c345"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_a51dfbd87c330c075c39832b6e7" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_26d12be3b5fec6c4adb1d79284"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_channels_channel" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD "productId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_a51dfbd87c330c075c39832b6e7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_722acbcc06403e693b518d2c345" PRIMARY KEY ("channelId", "productId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_722acbcc06403e693b518d2c345"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_26d12be3b5fec6c4adb1d792844" PRIMARY KEY ("productId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a51dfbd87c330c075c39832b6e"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_26d12be3b5fec6c4adb1d792844"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_722acbcc06403e693b518d2c345" PRIMARY KEY ("productId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_c4113b84381e953901fa5553654"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_fb5e800171ffbe9823f2cc727fd" PRIMARY KEY ("tagId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_9e412b00d4c6cee1a4b3d92071"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" ADD "assetId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_fb5e800171ffbe9823f2cc727fd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_c4113b84381e953901fa5553654" PRIMARY KEY ("tagId", "assetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_c4113b84381e953901fa5553654"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_9e412b00d4c6cee1a4b3d920716" PRIMARY KEY ("assetId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_fb5e800171ffbe9823f2cc727f"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" DROP COLUMN "tagId"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" ADD "tagId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_9e412b00d4c6cee1a4b3d920716"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_c4113b84381e953901fa5553654" PRIMARY KEY ("assetId", "tagId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_d943908a39e32952e8425d2f1ba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_16ca9151a5153f1169da5b7b7e3" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_dc4e7435f9f5e9e6436bebd33b"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_channels_channel" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD "assetId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_16ca9151a5153f1169da5b7b7e3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_d943908a39e32952e8425d2f1ba" PRIMARY KEY ("channelId", "assetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_d943908a39e32952e8425d2f1ba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_dc4e7435f9f5e9e6436bebd33bb" PRIMARY KEY ("assetId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_16ca9151a5153f1169da5b7b7e"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_dc4e7435f9f5e9e6436bebd33bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_d943908a39e32952e8425d2f1ba" PRIMARY KEY ("assetId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_50c5ed0504ded53967be811f633"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_fb05887e2867365f236d7dd95ee" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_6faa7b72422d9c4679e2f186ad"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP COLUMN "collectionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD "collectionId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_fb05887e2867365f236d7dd95ee"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_50c5ed0504ded53967be811f633" PRIMARY KEY ("productVariantId", "collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_50c5ed0504ded53967be811f633"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_6faa7b72422d9c4679e2f186ad1" PRIMARY KEY ("collectionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_fb05887e2867365f236d7dd95e"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD "productVariantId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_6faa7b72422d9c4679e2f186ad1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_50c5ed0504ded53967be811f633" PRIMARY KEY ("collectionId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_0e292d80228c9b4a114d2b09476"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_7216ab24077cf5cbece7857dbbd" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_cdbf33ffb5d451916125152008"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP COLUMN "collectionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD "collectionId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_7216ab24077cf5cbece7857dbbd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_0e292d80228c9b4a114d2b09476" PRIMARY KEY ("channelId", "collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_0e292d80228c9b4a114d2b09476"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_cdbf33ffb5d4519161251520083" PRIMARY KEY ("collectionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_7216ab24077cf5cbece7857dbb"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_cdbf33ffb5d4519161251520083"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_0e292d80228c9b4a114d2b09476" PRIMARY KEY ("collectionId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_b45b65256486a15a104e17d495c" PRIMARY KEY ("regionId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_433f45158e4e2b2a2f344714b2"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone_members_region" DROP COLUMN "zoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone_members_region" ADD "zoneId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_b45b65256486a15a104e17d495c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f" PRIMARY KEY ("regionId", "zoneId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_433f45158e4e2b2a2f344714b22" PRIMARY KEY ("zoneId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_b45b65256486a15a104e17d495"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone_members_region" DROP COLUMN "regionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone_members_region" ADD "regionId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_433f45158e4e2b2a2f344714b22"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f" PRIMARY KEY ("zoneId", "regionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_e09dfee62b158307404202b43a5" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_bfd2a03e9988eda6a9d1176011"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_channels_channel" DROP COLUMN "roleId"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_channels_channel" ADD "roleId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_e09dfee62b158307404202b43a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242" PRIMARY KEY ("channelId", "roleId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_bfd2a03e9988eda6a9d11760119" PRIMARY KEY ("roleId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_e09dfee62b158307404202b43a"`, undefined);
        await queryRunner.query(`ALTER TABLE "role_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_bfd2a03e9988eda6a9d11760119"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242" PRIMARY KEY ("roleId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_4be2f7adf862634f5f803d246b8" PRIMARY KEY ("roleId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "userId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_4be2f7adf862634f5f803d246b8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("roleId", "userId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_5f9286e6c25594c6b88c108db77" PRIMARY KEY ("userId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "roleId"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "roleId" uuid NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_5f9286e6c25594c6b88c108db77"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_85feea3f0e5e82133605f78db02" PRIMARY KEY ("customerGroupId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_b823a3c8bf3b78d3ed68736485"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP COLUMN "customerId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD "customerId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_85feea3f0e5e82133605f78db02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6" PRIMARY KEY ("customerGroupId", "customerId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_b823a3c8bf3b78d3ed68736485c" PRIMARY KEY ("customerId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_85feea3f0e5e82133605f78db0"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP COLUMN "customerGroupId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD "customerGroupId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_b823a3c8bf3b78d3ed68736485c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6" PRIMARY KEY ("customerId", "customerGroupId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_27e2fa538c020889d32a0a784e8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_dc9f69207a8867f83b0fd257e30" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_a842c9fe8cd4c8ff31402d172d"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP COLUMN "customerId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD "customerId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_dc9f69207a8867f83b0fd257e30"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_27e2fa538c020889d32a0a784e8" PRIMARY KEY ("channelId", "customerId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_27e2fa538c020889d32a0a784e8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_a842c9fe8cd4c8ff31402d172d7" PRIMARY KEY ("customerId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_dc9f69207a8867f83b0fd257e3"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_a842c9fe8cd4c8ff31402d172d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_27e2fa538c020889d32a0a784e8" PRIMARY KEY ("customerId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c00e36f667d35031087b382e61b" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_5bcb569635ce5407eb3f264487"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP COLUMN "paymentMethodId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD "paymentMethodId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c00e36f667d35031087b382e61b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2" PRIMARY KEY ("channelId", "paymentMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_5bcb569635ce5407eb3f264487d" PRIMARY KEY ("paymentMethodId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_c00e36f667d35031087b382e61"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_5bcb569635ce5407eb3f264487d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2" PRIMARY KEY ("paymentMethodId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_651689c2776497f2edf049b6473" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_f5a1624b4e31b5f16c13690ed6"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP COLUMN "administratorId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD "administratorId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_651689c2776497f2edf049b6473"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82" PRIMARY KEY ("channelId", "administratorId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_f5a1624b4e31b5f16c13690ed69" PRIMARY KEY ("administratorId")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_651689c2776497f2edf049b647"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD "channelId" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_f5a1624b4e31b5f16c13690ed69"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82" PRIMARY KEY ("administratorId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_9dda38e2273a7744b8f655782a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_457784c710f8ac9396010441f6c" PRIMARY KEY ("id_descendant")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_c309f8cd152bbeaea08491e0c6"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_closure" DROP COLUMN "id_ancestor"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD "id_ancestor" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_457784c710f8ac9396010441f6c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_9dda38e2273a7744b8f655782a5" PRIMARY KEY ("id_descendant", "id_ancestor")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_9dda38e2273a7744b8f655782a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_c309f8cd152bbeaea08491e0c66" PRIMARY KEY ("id_ancestor")`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_457784c710f8ac9396010441f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_closure" DROP COLUMN "id_descendant"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD "id_descendant" uuid NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_c309f8cd152bbeaea08491e0c66"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_9dda38e2273a7744b8f655782a5" PRIMARY KEY ("id_ancestor", "id_descendant")`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_eaea53f44bf9e97790d38a3d68" ON "facet_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7d57857922dfc7303604697dbe" ON "order_line_reference" ("orderLineId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_06b02fb482b188823e419d37bd" ON "order_line_reference" ("fulfillmentId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_22b818af8722746fb9f206068c" ON "order_line_reference" ("modificationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_30019aa65b17fe9ee962893199" ON "order_line_reference" ("refundId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1c6932a756108788a361e7d440" ON "refund" ("paymentId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d09d285fe1645cd2f0db811e29" ON "payment" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_154eb685f9b629033bd266df7f" ON "surcharge" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a49c5271c39cc8174a0535c808" ON "surcharge" ("orderModificationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1df5bc14a47ef24d2e681f4559" ON "order_modification" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1cc009e9ab2263a35544064561" ON "promotion_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_85ec26c71067ebc84adcd98d1a" ON "shipping_method_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e2e7642e1e88167c1dfc827fdf" ON "shipping_line" ("shippingMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c9f34a440d490d1b66f6829b86" ON "shipping_line" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_73a78d7df09541ac5eba620d18" ON "order" ("aggregateOrderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_124456e637cca7a415897dce65" ON "order" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e65ba3882557cab4febb54809b" ON "stock_movement" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a2fe7172eeae9f1cca86f8f573" ON "stock_movement" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d2c8d5fca981cc820131f81aa8" ON "stock_movement" ("orderLineId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6901d8715f5ebadd764466f7bd" ON "order_line" ("sellerChannelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc9ac68b47da7b62249886affb" ON "order_line" ("shippingLineId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_cbcd22193eda94668e84d33f18" ON "order_line" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_77be94ce9ec650446617946227" ON "order_line" ("taxCategoryId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9f065453910ea77d4be8e92618" ON "order_line" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_239cfca2a55b98b90b6bef2e44" ON "order_line" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_93751abc1451972c02e033b766" ON "product_option_group_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a6e91739227bf4d442f23c52c7" ON "product_option_group" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a79a443c1f7841f3851767faa6" ON "product_option_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a6debf9198e2fbfa006aa10d71" ON "product_option" ("groupId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9950eae3180f39c71978748bd0" ON "stock_level" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_984c48572468c69661a0b7b049" ON "stock_level" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "IDX_7fc20486b8cfd33dc84c96e168" ON "stock_level" ("productVariantId", "stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_10b5a2e3dee0e30b1e26c32f5c" ON "product_variant_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_fa21412afac15a2304f3eb35fe" ON "product_variant_asset" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e6126cd268aea6e9b31d89af9a" ON "product_variant_price" ("variantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_420f4d6fb75d38b9dca79bc43b" ON "product_variant_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0e6f516053cf982b537836e21c" ON "product_variant" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e38dca0d82fd64c7cf8aac8b8e" ON "product_variant" ("taxCategoryId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6e420052844edf3a5506d863ce" ON "product_variant" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_3d6e45823b65de808a66cb1423" ON "facet_value_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d101dc2265a7341be3d94968c5" ON "facet_value" ("facetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_5888ac17b317b93378494a1062" ON "product_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0d1294f5c22a56da7845ebab72" ON "product_asset" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7dbc75cb4e8b002620c4dbfdac" ON "product_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_91a19e6613534949a4ce6e76ff" ON "product" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_51da53b26522dc0525762d2de8" ON "collection_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1ed9e48dfbf74b5fcbb35d3d68" ON "collection_asset" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e329f9036210d75caa1d8f2154" ON "collection_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7256fef1bb42f1b38156b7449f" ON "collection" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1afd722b943c81310705fc3e61" ON "region_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ed0c8098ce6809925a437f42ae" ON "region" ("parentId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7ee3306d7638aa85ca90d67219" ON "tax_rate" ("categoryId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9872fc7de2f4e532fd3230d191" ON "tax_rate" ("zoneId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_8b5ab52fc8887c1a769b9276ca" ON "tax_rate" ("customerGroupId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_af2116c7e176b6b88dceceeb74" ON "channel" ("sellerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_afe9f917a1c82b9e9e69f7c612" ON "channel" ("defaultTaxZoneId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c9ca2f58d4517460435cbd8b4c" ON "channel" ("defaultShippingZoneId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_00cbe87bc0d4e36758d61bd31d" ON "authentication_method" ("userId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7a75399a4f4ffa48ee02e98c05" ON "session" ("activeOrderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_eb87ef1e234444728138302263" ON "session" ("activeChannelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_3d2f174ef04fb312fdebd0ddc5" ON "session" ("userId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc34d382b493ade1f70e834c4d" ON "address" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d87215343c3a3a67e6a0b7f3ea" ON "address" ("countryId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_66187f782a3e71b9e0f5b50b68" ON "payment_method_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_92f8c334ef06275f9586fd0183" ON "history_entry" ("administratorId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_43ac602f839847fdb91101f30e" ON "history_entry" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_3a05127e67435b4d2332ded7c9" ON "history_entry" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ca796020c6d097e251e5d6d2b0" ON "facet_channels_channel" ("facetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_2a8ea404d05bf682516184db7d" ON "facet_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6d9e2c39ab12391aaa374bcdaa" ON "promotion_channels_channel" ("promotionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0eaaf0f4b6c69afde1e88ffb52" ON "promotion_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f0a17b94aa5a162f0d422920eb" ON "shipping_method_channels_channel" ("shippingMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f2b98dfb56685147bed509acc3" ON "shipping_method_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_67be0e40122ab30a62a9817efe" ON "order_promotions_promotion" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_2c26b988769c0e3b0120bdef31" ON "order_promotions_promotion" ("promotionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f80d84d525af2ffe974e7e8ca2" ON "order_fulfillments_fulfillment" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_4add5a5796e1582dec2877b289" ON "order_fulfillments_fulfillment" ("fulfillmentId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0d8e5c204480204a60e151e485" ON "order_channels_channel" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d0d16db872499e83b15999f8c7" ON "order_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_39513fd02a573c848d23bee587" ON "stock_location_channels_channel" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ff8150fe54e56a900d5712671a" ON "stock_location_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_526f0131260eec308a3bd2b61b" ON "product_variant_options_product_option" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e96a71affe63c97f7fa2f076da" ON "product_variant_options_product_option" ("productOptionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_69567bc225b6bbbd732d6c5455" ON "product_variant_facet_values_facet_value" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0d641b761ed1dce4ef3cd33d55" ON "product_variant_facet_values_facet_value" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_beeb2b3cd800e589f2213ae99d" ON "product_variant_channels_channel" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d194bff171b62357688a5d0f55" ON "product_variant_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ad690c1b05596d7f52e52ffeed" ON "facet_value_channels_channel" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e1d54c0b9db3e2eb17faaf5919" ON "facet_value_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6a0558e650d75ae639ff38e413" ON "product_facet_values_facet_value" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_06e7d73673ee630e8ec50d0b29" ON "product_facet_values_facet_value" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_26d12be3b5fec6c4adb1d79284" ON "product_channels_channel" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a51dfbd87c330c075c39832b6e" ON "product_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9e412b00d4c6cee1a4b3d92071" ON "asset_tags_tag" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_fb5e800171ffbe9823f2cc727f" ON "asset_tags_tag" ("tagId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc4e7435f9f5e9e6436bebd33b" ON "asset_channels_channel" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_16ca9151a5153f1169da5b7b7e" ON "asset_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6faa7b72422d9c4679e2f186ad" ON "collection_product_variants_product_variant" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_fb05887e2867365f236d7dd95e" ON "collection_product_variants_product_variant" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_cdbf33ffb5d451916125152008" ON "collection_channels_channel" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7216ab24077cf5cbece7857dbb" ON "collection_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_433f45158e4e2b2a2f344714b2" ON "zone_members_region" ("zoneId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_b45b65256486a15a104e17d495" ON "zone_members_region" ("regionId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_bfd2a03e9988eda6a9d1176011" ON "role_channels_channel" ("roleId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e09dfee62b158307404202b43a" ON "role_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_b823a3c8bf3b78d3ed68736485" ON "customer_groups_customer_group" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_85feea3f0e5e82133605f78db0" ON "customer_groups_customer_group" ("customerGroupId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a842c9fe8cd4c8ff31402d172d" ON "customer_channels_channel" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc9f69207a8867f83b0fd257e3" ON "customer_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_5bcb569635ce5407eb3f264487" ON "payment_method_channels_channel" ("paymentMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c00e36f667d35031087b382e61" ON "payment_method_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f5a1624b4e31b5f16c13690ed6" ON "administrator_channels_channel" ("administratorId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_651689c2776497f2edf049b647" ON "administrator_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c309f8cd152bbeaea08491e0c6" ON "collection_closure" ("id_ancestor") `,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_457784c710f8ac9396010441f6" ON "collection_closure" ("id_descendant") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" ADD CONSTRAINT "FK_eaea53f44bf9e97790d38a3d68f" FOREIGN KEY ("baseId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_7d57857922dfc7303604697dbe9" FOREIGN KEY ("orderLineId") REFERENCES "order_line"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_06b02fb482b188823e419d37bd4" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_22b818af8722746fb9f206068c2" FOREIGN KEY ("modificationId") REFERENCES "order_modification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_30019aa65b17fe9ee9628931991" FOREIGN KEY ("refundId") REFERENCES "refund"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" ADD CONSTRAINT "FK_1c6932a756108788a361e7d4404" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD CONSTRAINT "FK_d09d285fe1645cd2f0db811e293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "FK_154eb685f9b629033bd266df7fa" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "FK_a49c5271c39cc8174a0535c8088" FOREIGN KEY ("orderModificationId") REFERENCES "order_modification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_1df5bc14a47ef24d2e681f45598" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_ad2991fa2933ed8b7f86a716338" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_cb66b63b6e97613013795eadbd5" FOREIGN KEY ("refundId") REFERENCES "refund"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" ADD CONSTRAINT "FK_1cc009e9ab2263a35544064561b" FOREIGN KEY ("baseId") REFERENCES "promotion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5" FOREIGN KEY ("baseId") REFERENCES "shipping_method"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "FK_e2e7642e1e88167c1dfc827fdf3" FOREIGN KEY ("shippingMethodId") REFERENCES "shipping_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "FK_c9f34a440d490d1b66f6829b86c" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_73a78d7df09541ac5eba620d181" FOREIGN KEY ("aggregateOrderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_e65ba3882557cab4febb54809bb" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83" FOREIGN KEY ("orderLineId") REFERENCES "order_line"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_6901d8715f5ebadd764466f7bde" FOREIGN KEY ("sellerChannelId") REFERENCES "channel"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_dc9ac68b47da7b62249886affba" FOREIGN KEY ("shippingLineId") REFERENCES "shipping_line"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_cbcd22193eda94668e84d33f185" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_77be94ce9ec6504466179462275" FOREIGN KEY ("taxCategoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_9f065453910ea77d4be8e92618f" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_239cfca2a55b98b90b6bef2e44f" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD CONSTRAINT "FK_93751abc1451972c02e033b766c" FOREIGN KEY ("baseId") REFERENCES "product_option_group"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" ADD CONSTRAINT "FK_a6e91739227bf4d442f23c52c75" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD CONSTRAINT "FK_a79a443c1f7841f3851767faa6d" FOREIGN KEY ("baseId") REFERENCES "product_option"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" ADD CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710" FOREIGN KEY ("groupId") REFERENCES "product_option_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "FK_9950eae3180f39c71978748bd08" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "FK_984c48572468c69661a0b7b0494" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "FK_10b5a2e3dee0e30b1e26c32f5c7" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "FK_fa21412afac15a2304f3eb35feb" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD CONSTRAINT "FK_e6126cd268aea6e9b31d89af9ab" FOREIGN KEY ("variantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD CONSTRAINT "FK_420f4d6fb75d38b9dca79bc43b4" FOREIGN KEY ("baseId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_0e6f516053cf982b537836e21cf" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_e38dca0d82fd64c7cf8aac8b8ef" FOREIGN KEY ("taxCategoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" ADD CONSTRAINT "FK_3d6e45823b65de808a66cb1423b" FOREIGN KEY ("baseId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" ADD CONSTRAINT "FK_d101dc2265a7341be3d94968c5b" FOREIGN KEY ("facetId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "FK_5888ac17b317b93378494a10620" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "FK_0d1294f5c22a56da7845ebab72c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" ADD CONSTRAINT "FK_7dbc75cb4e8b002620c4dbfdac5" FOREIGN KEY ("baseId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "FK_51da53b26522dc0525762d2de8e" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "FK_1ed9e48dfbf74b5fcbb35d3d686" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" ADD CONSTRAINT "FK_e329f9036210d75caa1d8f2154a" FOREIGN KEY ("baseId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "FK_7256fef1bb42f1b38156b7449f5" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "FK_4257b61275144db89fa0f5dc059" FOREIGN KEY ("parentId") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" ADD CONSTRAINT "FK_1afd722b943c81310705fc3e612" FOREIGN KEY ("baseId") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" ADD CONSTRAINT "FK_ed0c8098ce6809925a437f42aec" FOREIGN KEY ("parentId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "FK_af2116c7e176b6b88dceceeb74b" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "FK_afe9f917a1c82b9e9e69f7c6129" FOREIGN KEY ("defaultTaxZoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "FK_c9ca2f58d4517460435cbd8b4c9" FOREIGN KEY ("defaultShippingZoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" ADD CONSTRAINT "FK_00cbe87bc0d4e36758d61bd31d6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_7a75399a4f4ffa48ee02e98c059" FOREIGN KEY ("activeOrderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_eb87ef1e234444728138302263b" FOREIGN KEY ("activeChannelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "FK_3f62b42ed23958b120c235f74df" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "FK_d87215343c3a3a67e6a0b7f3ea9" FOREIGN KEY ("countryId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD CONSTRAINT "FK_66187f782a3e71b9e0f5b50b68b" FOREIGN KEY ("baseId") REFERENCES "payment_method"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_1966e18ce6a39a82b19204704d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_9e4a35ccd6c947cf154d6402c2a" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_92f8c334ef06275f9586fd01832" FOREIGN KEY ("administratorId") REFERENCES "administrator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_43ac602f839847fdb91101f30ec" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "FK_ca796020c6d097e251e5d6d2b02" FOREIGN KEY ("facetId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "FK_2a8ea404d05bf682516184db7d3" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "FK_6d9e2c39ab12391aaa374bcdaa4" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "FK_0eaaf0f4b6c69afde1e88ffb52d" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "FK_f0a17b94aa5a162f0d422920eb2" FOREIGN KEY ("shippingMethodId") REFERENCES "shipping_method"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "FK_f2b98dfb56685147bed509acc3d" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "FK_67be0e40122ab30a62a9817efe0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "FK_2c26b988769c0e3b0120bdef31b" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "FK_f80d84d525af2ffe974e7e8ca29" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "FK_4add5a5796e1582dec2877b2898" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_0d8e5c204480204a60e151e4853" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_d0d16db872499e83b15999f8c7a" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "FK_39513fd02a573c848d23bee587d" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "FK_ff8150fe54e56a900d5712671a0" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "FK_526f0131260eec308a3bd2b61b6" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "FK_e96a71affe63c97f7fa2f076dac" FOREIGN KEY ("productOptionId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "FK_69567bc225b6bbbd732d6c5455b" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "FK_0d641b761ed1dce4ef3cd33d559" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "FK_beeb2b3cd800e589f2213ae99d6" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "FK_d194bff171b62357688a5d0f559" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "FK_ad690c1b05596d7f52e52ffeedd" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "FK_e1d54c0b9db3e2eb17faaf5919c" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "FK_6a0558e650d75ae639ff38e413a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "FK_06e7d73673ee630e8ec50d0b29f" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "FK_26d12be3b5fec6c4adb1d792844" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "FK_a51dfbd87c330c075c39832b6e7" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "FK_9e412b00d4c6cee1a4b3d920716" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "FK_fb5e800171ffbe9823f2cc727fd" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "FK_dc4e7435f9f5e9e6436bebd33bb" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "FK_16ca9151a5153f1169da5b7b7e3" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "FK_6faa7b72422d9c4679e2f186ad1" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "FK_fb05887e2867365f236d7dd95ee" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "FK_cdbf33ffb5d4519161251520083" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "FK_7216ab24077cf5cbece7857dbbd" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "FK_433f45158e4e2b2a2f344714b22" FOREIGN KEY ("zoneId") REFERENCES "zone"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "FK_b45b65256486a15a104e17d495c" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "FK_bfd2a03e9988eda6a9d11760119" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "FK_e09dfee62b158307404202b43a5" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "FK_b823a3c8bf3b78d3ed68736485c" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "FK_85feea3f0e5e82133605f78db02" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "FK_5bcb569635ce5407eb3f264487d" FOREIGN KEY ("paymentMethodId") REFERENCES "payment_method"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "FK_c00e36f667d35031087b382e61b" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "FK_f5a1624b4e31b5f16c13690ed69" FOREIGN KEY ("administratorId") REFERENCES "administrator"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "FK_651689c2776497f2edf049b6473" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "FK_c309f8cd152bbeaea08491e0c66" FOREIGN KEY ("id_ancestor") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "FK_457784c710f8ac9396010441f6c" FOREIGN KEY ("id_descendant") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "FK_457784c710f8ac9396010441f6c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "FK_c309f8cd152bbeaea08491e0c66"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "FK_651689c2776497f2edf049b6473"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "FK_f5a1624b4e31b5f16c13690ed69"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "FK_c00e36f667d35031087b382e61b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "FK_5bcb569635ce5407eb3f264487d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "FK_85feea3f0e5e82133605f78db02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "FK_b823a3c8bf3b78d3ed68736485c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "FK_e09dfee62b158307404202b43a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "FK_bfd2a03e9988eda6a9d11760119"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "FK_b45b65256486a15a104e17d495c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "FK_433f45158e4e2b2a2f344714b22"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "FK_7216ab24077cf5cbece7857dbbd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "FK_cdbf33ffb5d4519161251520083"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "FK_fb05887e2867365f236d7dd95ee"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "FK_6faa7b72422d9c4679e2f186ad1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "FK_16ca9151a5153f1169da5b7b7e3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "FK_dc4e7435f9f5e9e6436bebd33bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "FK_fb5e800171ffbe9823f2cc727fd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "FK_9e412b00d4c6cee1a4b3d920716"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "FK_a51dfbd87c330c075c39832b6e7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "FK_26d12be3b5fec6c4adb1d792844"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "FK_06e7d73673ee630e8ec50d0b29f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "FK_6a0558e650d75ae639ff38e413a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "FK_e1d54c0b9db3e2eb17faaf5919c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "FK_ad690c1b05596d7f52e52ffeedd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "FK_d194bff171b62357688a5d0f559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "FK_beeb2b3cd800e589f2213ae99d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "FK_0d641b761ed1dce4ef3cd33d559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "FK_69567bc225b6bbbd732d6c5455b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "FK_e96a71affe63c97f7fa2f076dac"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "FK_526f0131260eec308a3bd2b61b6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "FK_ff8150fe54e56a900d5712671a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "FK_39513fd02a573c848d23bee587d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_d0d16db872499e83b15999f8c7a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "FK_0d8e5c204480204a60e151e4853"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "FK_4add5a5796e1582dec2877b2898"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "FK_f80d84d525af2ffe974e7e8ca29"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "FK_2c26b988769c0e3b0120bdef31b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "FK_67be0e40122ab30a62a9817efe0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "FK_f2b98dfb56685147bed509acc3d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "FK_f0a17b94aa5a162f0d422920eb2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "FK_0eaaf0f4b6c69afde1e88ffb52d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "FK_6d9e2c39ab12391aaa374bcdaa4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "FK_2a8ea404d05bf682516184db7d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "FK_ca796020c6d097e251e5d6d2b02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_43ac602f839847fdb91101f30ec"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "FK_92f8c334ef06275f9586fd01832"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "FK_9e4a35ccd6c947cf154d6402c2a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "FK_1966e18ce6a39a82b19204704d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" DROP CONSTRAINT "FK_66187f782a3e71b9e0f5b50b68b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "FK_d87215343c3a3a67e6a0b7f3ea9"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "FK_3f62b42ed23958b120c235f74df"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_eb87ef1e234444728138302263b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "FK_7a75399a4f4ffa48ee02e98c059"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" DROP CONSTRAINT "FK_00cbe87bc0d4e36758d61bd31d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "FK_c9ca2f58d4517460435cbd8b4c9"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "FK_afe9f917a1c82b9e9e69f7c6129"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "FK_af2116c7e176b6b88dceceeb74b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "FK_7ee3306d7638aa85ca90d672198"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" DROP CONSTRAINT "FK_ed0c8098ce6809925a437f42aec"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" DROP CONSTRAINT "FK_1afd722b943c81310705fc3e612"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "FK_4257b61275144db89fa0f5dc059"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "FK_7256fef1bb42f1b38156b7449f5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" DROP CONSTRAINT "FK_e329f9036210d75caa1d8f2154a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "FK_1ed9e48dfbf74b5fcbb35d3d686"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "FK_51da53b26522dc0525762d2de8e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" DROP CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" DROP CONSTRAINT "FK_7dbc75cb4e8b002620c4dbfdac5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "FK_0d1294f5c22a56da7845ebab72c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "FK_5888ac17b317b93378494a10620"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" DROP CONSTRAINT "FK_d101dc2265a7341be3d94968c5b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" DROP CONSTRAINT "FK_3d6e45823b65de808a66cb1423b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_6e420052844edf3a5506d863ce6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_e38dca0d82fd64c7cf8aac8b8ef"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_0e6f516053cf982b537836e21cf"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" DROP CONSTRAINT "FK_420f4d6fb75d38b9dca79bc43b4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" DROP CONSTRAINT "FK_e6126cd268aea6e9b31d89af9ab"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "FK_fa21412afac15a2304f3eb35feb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "FK_10b5a2e3dee0e30b1e26c32f5c7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "FK_984c48572468c69661a0b7b0494"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "FK_9950eae3180f39c71978748bd08"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" DROP CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" DROP CONSTRAINT "FK_a79a443c1f7841f3851767faa6d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" DROP CONSTRAINT "FK_a6e91739227bf4d442f23c52c75"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP CONSTRAINT "FK_93751abc1451972c02e033b766c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_239cfca2a55b98b90b6bef2e44f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_9f065453910ea77d4be8e92618f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_77be94ce9ec6504466179462275"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_cbcd22193eda94668e84d33f185"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_dc9ac68b47da7b62249886affba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "FK_6901d8715f5ebadd764466f7bde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "FK_e65ba3882557cab4febb54809bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "FK_73a78d7df09541ac5eba620d181"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "FK_c9f34a440d490d1b66f6829b86c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "FK_e2e7642e1e88167c1dfc827fdf3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" DROP CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" DROP CONSTRAINT "FK_1cc009e9ab2263a35544064561b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_cb66b63b6e97613013795eadbd5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_ad2991fa2933ed8b7f86a716338"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "FK_1df5bc14a47ef24d2e681f45598"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "FK_a49c5271c39cc8174a0535c8088"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "FK_154eb685f9b629033bd266df7fa"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP CONSTRAINT "FK_d09d285fe1645cd2f0db811e293"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" DROP CONSTRAINT "FK_1c6932a756108788a361e7d4404"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_30019aa65b17fe9ee9628931991"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_22b818af8722746fb9f206068c2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_06b02fb482b188823e419d37bd4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "FK_7d57857922dfc7303604697dbe9"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" DROP CONSTRAINT "FK_eaea53f44bf9e97790d38a3d68f"`,
            undefined,
        );
        await queryRunner.query(`DROP INDEX "public"."IDX_457784c710f8ac9396010441f6"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c309f8cd152bbeaea08491e0c6"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_651689c2776497f2edf049b647"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_f5a1624b4e31b5f16c13690ed6"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c00e36f667d35031087b382e61"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_5bcb569635ce5407eb3f264487"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc9f69207a8867f83b0fd257e3"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a842c9fe8cd4c8ff31402d172d"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_85feea3f0e5e82133605f78db0"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_b823a3c8bf3b78d3ed68736485"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e09dfee62b158307404202b43a"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_bfd2a03e9988eda6a9d1176011"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_b45b65256486a15a104e17d495"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_433f45158e4e2b2a2f344714b2"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7216ab24077cf5cbece7857dbb"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_cdbf33ffb5d451916125152008"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb05887e2867365f236d7dd95e"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_6faa7b72422d9c4679e2f186ad"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_16ca9151a5153f1169da5b7b7e"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc4e7435f9f5e9e6436bebd33b"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb5e800171ffbe9823f2cc727f"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9e412b00d4c6cee1a4b3d92071"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a51dfbd87c330c075c39832b6e"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_26d12be3b5fec6c4adb1d79284"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_06e7d73673ee630e8ec50d0b29"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_6a0558e650d75ae639ff38e413"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1d54c0b9db3e2eb17faaf5919"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad690c1b05596d7f52e52ffeed"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d194bff171b62357688a5d0f55"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_beeb2b3cd800e589f2213ae99d"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d641b761ed1dce4ef3cd33d55"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_69567bc225b6bbbd732d6c5455"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e96a71affe63c97f7fa2f076da"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_526f0131260eec308a3bd2b61b"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_ff8150fe54e56a900d5712671a"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_39513fd02a573c848d23bee587"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d0d16db872499e83b15999f8c7"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d8e5c204480204a60e151e485"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_4add5a5796e1582dec2877b289"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_f80d84d525af2ffe974e7e8ca2"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c26b988769c0e3b0120bdef31"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_67be0e40122ab30a62a9817efe"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_f2b98dfb56685147bed509acc3"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0a17b94aa5a162f0d422920eb"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0eaaf0f4b6c69afde1e88ffb52"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d9e2c39ab12391aaa374bcdaa"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a8ea404d05bf682516184db7d"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_ca796020c6d097e251e5d6d2b0"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a05127e67435b4d2332ded7c9"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_43ac602f839847fdb91101f30e"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_92f8c334ef06275f9586fd0183"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_66187f782a3e71b9e0f5b50b68"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d87215343c3a3a67e6a0b7f3ea"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc34d382b493ade1f70e834c4d"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d2f174ef04fb312fdebd0ddc5"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb87ef1e234444728138302263"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7a75399a4f4ffa48ee02e98c05"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_00cbe87bc0d4e36758d61bd31d"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9ca2f58d4517460435cbd8b4c"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_afe9f917a1c82b9e9e69f7c612"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_af2116c7e176b6b88dceceeb74"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b5ab52fc8887c1a769b9276ca"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9872fc7de2f4e532fd3230d191"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ee3306d7638aa85ca90d67219"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_ed0c8098ce6809925a437f42ae"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1afd722b943c81310705fc3e61"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7256fef1bb42f1b38156b7449f"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e329f9036210d75caa1d8f2154"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1ed9e48dfbf74b5fcbb35d3d68"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_51da53b26522dc0525762d2de8"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_91a19e6613534949a4ce6e76ff"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7dbc75cb4e8b002620c4dbfdac"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d1294f5c22a56da7845ebab72"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_5888ac17b317b93378494a1062"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d101dc2265a7341be3d94968c5"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_3d6e45823b65de808a66cb1423"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e420052844edf3a5506d863ce"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e38dca0d82fd64c7cf8aac8b8e"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_0e6f516053cf982b537836e21c"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_420f4d6fb75d38b9dca79bc43b"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6126cd268aea6e9b31d89af9a"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_fa21412afac15a2304f3eb35fe"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_10b5a2e3dee0e30b1e26c32f5c"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7fc20486b8cfd33dc84c96e168"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_984c48572468c69661a0b7b049"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9950eae3180f39c71978748bd0"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6debf9198e2fbfa006aa10d71"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a79a443c1f7841f3851767faa6"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6e91739227bf4d442f23c52c7"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_93751abc1451972c02e033b766"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_239cfca2a55b98b90b6bef2e44"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f065453910ea77d4be8e92618"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_77be94ce9ec650446617946227"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_cbcd22193eda94668e84d33f18"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc9ac68b47da7b62249886affb"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_6901d8715f5ebadd764466f7bd"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d2c8d5fca981cc820131f81aa8"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2fe7172eeae9f1cca86f8f573"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e65ba3882557cab4febb54809b"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_124456e637cca7a415897dce65"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_73a78d7df09541ac5eba620d18"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9f34a440d490d1b66f6829b86"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_e2e7642e1e88167c1dfc827fdf"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_85ec26c71067ebc84adcd98d1a"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1cc009e9ab2263a35544064561"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1df5bc14a47ef24d2e681f4559"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_a49c5271c39cc8174a0535c808"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_154eb685f9b629033bd266df7f"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_d09d285fe1645cd2f0db811e29"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_1c6932a756108788a361e7d440"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_30019aa65b17fe9ee962893199"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_22b818af8722746fb9f206068c"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_06b02fb482b188823e419d37bd"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_7d57857922dfc7303604697dbe"`, undefined);
        await queryRunner.query(`DROP INDEX "public"."IDX_eaea53f44bf9e97790d38a3d68"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_9dda38e2273a7744b8f655782a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_c309f8cd152bbeaea08491e0c66" PRIMARY KEY ("id_ancestor")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_closure" DROP COLUMN "id_descendant"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD "id_descendant" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_457784c710f8ac9396010441f6" ON "collection_closure" ("id_descendant") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_c309f8cd152bbeaea08491e0c66"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_9dda38e2273a7744b8f655782a5" PRIMARY KEY ("id_descendant", "id_ancestor")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_9dda38e2273a7744b8f655782a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_457784c710f8ac9396010441f6c" PRIMARY KEY ("id_descendant")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_closure" DROP COLUMN "id_ancestor"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD "id_ancestor" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c309f8cd152bbeaea08491e0c6" ON "collection_closure" ("id_ancestor") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" DROP CONSTRAINT "PK_457784c710f8ac9396010441f6c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "PK_9dda38e2273a7744b8f655782a5" PRIMARY KEY ("id_ancestor", "id_descendant")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_f5a1624b4e31b5f16c13690ed69" PRIMARY KEY ("administratorId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_651689c2776497f2edf049b647" ON "administrator_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_f5a1624b4e31b5f16c13690ed69"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82" PRIMARY KEY ("channelId", "administratorId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_651689c2776497f2edf049b6473" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP COLUMN "administratorId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD "administratorId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f5a1624b4e31b5f16c13690ed6" ON "administrator_channels_channel" ("administratorId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" DROP CONSTRAINT "PK_651689c2776497f2edf049b6473"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "PK_24fb06f5a9a3eb83063a1f1da82" PRIMARY KEY ("administratorId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_5bcb569635ce5407eb3f264487d" PRIMARY KEY ("paymentMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c00e36f667d35031087b382e61" ON "payment_method_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_5bcb569635ce5407eb3f264487d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2" PRIMARY KEY ("channelId", "paymentMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c00e36f667d35031087b382e61b" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP COLUMN "paymentMethodId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD "paymentMethodId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_5bcb569635ce5407eb3f264487" ON "payment_method_channels_channel" ("paymentMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" DROP CONSTRAINT "PK_c00e36f667d35031087b382e61b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "PK_c83e4a201c0402ce5cdb170a9a2" PRIMARY KEY ("paymentMethodId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_27e2fa538c020889d32a0a784e8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_a842c9fe8cd4c8ff31402d172d7" PRIMARY KEY ("customerId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc9f69207a8867f83b0fd257e3" ON "customer_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_a842c9fe8cd4c8ff31402d172d7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_27e2fa538c020889d32a0a784e8" PRIMARY KEY ("channelId", "customerId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_27e2fa538c020889d32a0a784e8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_dc9f69207a8867f83b0fd257e30" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP COLUMN "customerId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD "customerId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a842c9fe8cd4c8ff31402d172d" ON "customer_channels_channel" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" DROP CONSTRAINT "PK_dc9f69207a8867f83b0fd257e30"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "PK_27e2fa538c020889d32a0a784e8" PRIMARY KEY ("customerId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_b823a3c8bf3b78d3ed68736485c" PRIMARY KEY ("customerId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP COLUMN "customerGroupId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD "customerGroupId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_85feea3f0e5e82133605f78db0" ON "customer_groups_customer_group" ("customerGroupId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_b823a3c8bf3b78d3ed68736485c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6" PRIMARY KEY ("customerGroupId", "customerId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_85feea3f0e5e82133605f78db02" PRIMARY KEY ("customerGroupId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP COLUMN "customerId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD "customerId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_b823a3c8bf3b78d3ed68736485" ON "customer_groups_customer_group" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" DROP CONSTRAINT "PK_85feea3f0e5e82133605f78db02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "PK_0f902789cba691ce7ebbc9fcaa6" PRIMARY KEY ("customerId", "customerGroupId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_5f9286e6c25594c6b88c108db77" PRIMARY KEY ("userId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "roleId"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "roleId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_5f9286e6c25594c6b88c108db77"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("roleId", "userId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_4be2f7adf862634f5f803d246b8" PRIMARY KEY ("roleId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "userId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_4be2f7adf862634f5f803d246b8"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_bfd2a03e9988eda6a9d11760119" PRIMARY KEY ("roleId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "role_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e09dfee62b158307404202b43a" ON "role_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_bfd2a03e9988eda6a9d11760119"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242" PRIMARY KEY ("channelId", "roleId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_e09dfee62b158307404202b43a5" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "role_channels_channel" DROP COLUMN "roleId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD "roleId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_bfd2a03e9988eda6a9d1176011" ON "role_channels_channel" ("roleId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" DROP CONSTRAINT "PK_e09dfee62b158307404202b43a5"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "PK_6fb9277e9f11bb8a63445c36242" PRIMARY KEY ("roleId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_433f45158e4e2b2a2f344714b22" PRIMARY KEY ("zoneId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "zone_members_region" DROP COLUMN "regionId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD "regionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_b45b65256486a15a104e17d495" ON "zone_members_region" ("regionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_433f45158e4e2b2a2f344714b22"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f" PRIMARY KEY ("regionId", "zoneId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_b45b65256486a15a104e17d495c" PRIMARY KEY ("regionId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "zone_members_region" DROP COLUMN "zoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone_members_region" ADD "zoneId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_433f45158e4e2b2a2f344714b2" ON "zone_members_region" ("zoneId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" DROP CONSTRAINT "PK_b45b65256486a15a104e17d495c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "PK_fc4eaa2236c4d4f61db0ae3826f" PRIMARY KEY ("zoneId", "regionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_0e292d80228c9b4a114d2b09476"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_cdbf33ffb5d4519161251520083" PRIMARY KEY ("collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7216ab24077cf5cbece7857dbb" ON "collection_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_cdbf33ffb5d4519161251520083"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_0e292d80228c9b4a114d2b09476" PRIMARY KEY ("channelId", "collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_0e292d80228c9b4a114d2b09476"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_7216ab24077cf5cbece7857dbbd" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP COLUMN "collectionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD "collectionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_cdbf33ffb5d451916125152008" ON "collection_channels_channel" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" DROP CONSTRAINT "PK_7216ab24077cf5cbece7857dbbd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "PK_0e292d80228c9b4a114d2b09476" PRIMARY KEY ("collectionId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_50c5ed0504ded53967be811f633"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_6faa7b72422d9c4679e2f186ad1" PRIMARY KEY ("collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_fb05887e2867365f236d7dd95e" ON "collection_product_variants_product_variant" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_6faa7b72422d9c4679e2f186ad1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_50c5ed0504ded53967be811f633" PRIMARY KEY ("productVariantId", "collectionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_50c5ed0504ded53967be811f633"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_fb05887e2867365f236d7dd95ee" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP COLUMN "collectionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD "collectionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6faa7b72422d9c4679e2f186ad" ON "collection_product_variants_product_variant" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" DROP CONSTRAINT "PK_fb05887e2867365f236d7dd95ee"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "PK_50c5ed0504ded53967be811f633" PRIMARY KEY ("collectionId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_d943908a39e32952e8425d2f1ba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_dc4e7435f9f5e9e6436bebd33bb" PRIMARY KEY ("assetId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_16ca9151a5153f1169da5b7b7e" ON "asset_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_dc4e7435f9f5e9e6436bebd33bb"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_d943908a39e32952e8425d2f1ba" PRIMARY KEY ("channelId", "assetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_d943908a39e32952e8425d2f1ba"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_16ca9151a5153f1169da5b7b7e3" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset_channels_channel" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD "assetId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dc4e7435f9f5e9e6436bebd33b" ON "asset_channels_channel" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" DROP CONSTRAINT "PK_16ca9151a5153f1169da5b7b7e3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "PK_d943908a39e32952e8425d2f1ba" PRIMARY KEY ("assetId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_c4113b84381e953901fa5553654"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_9e412b00d4c6cee1a4b3d920716" PRIMARY KEY ("assetId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" DROP COLUMN "tagId"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" ADD "tagId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_fb5e800171ffbe9823f2cc727f" ON "asset_tags_tag" ("tagId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_9e412b00d4c6cee1a4b3d920716"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_c4113b84381e953901fa5553654" PRIMARY KEY ("tagId", "assetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_c4113b84381e953901fa5553654"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_fb5e800171ffbe9823f2cc727fd" PRIMARY KEY ("tagId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset_tags_tag" ADD "assetId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_9e412b00d4c6cee1a4b3d92071" ON "asset_tags_tag" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" DROP CONSTRAINT "PK_fb5e800171ffbe9823f2cc727fd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "PK_c4113b84381e953901fa5553654" PRIMARY KEY ("assetId", "tagId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_722acbcc06403e693b518d2c345"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_26d12be3b5fec6c4adb1d792844" PRIMARY KEY ("productId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a51dfbd87c330c075c39832b6e" ON "product_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_26d12be3b5fec6c4adb1d792844"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_722acbcc06403e693b518d2c345" PRIMARY KEY ("channelId", "productId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_722acbcc06403e693b518d2c345"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_a51dfbd87c330c075c39832b6e7" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_channels_channel" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD "productId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_26d12be3b5fec6c4adb1d79284" ON "product_channels_channel" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" DROP CONSTRAINT "PK_a51dfbd87c330c075c39832b6e7"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "PK_722acbcc06403e693b518d2c345" PRIMARY KEY ("productId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_d57f06b38805181019d75662aa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_6a0558e650d75ae639ff38e413a" PRIMARY KEY ("productId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD "facetValueId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_06e7d73673ee630e8ec50d0b29" ON "product_facet_values_facet_value" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_6a0558e650d75ae639ff38e413a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_d57f06b38805181019d75662aa6" PRIMARY KEY ("facetValueId", "productId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_d57f06b38805181019d75662aa6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_06e7d73673ee630e8ec50d0b29f" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP COLUMN "productId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD "productId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6a0558e650d75ae639ff38e413" ON "product_facet_values_facet_value" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" DROP CONSTRAINT "PK_06e7d73673ee630e8ec50d0b29f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "PK_d57f06b38805181019d75662aa6" PRIMARY KEY ("productId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_653fb72a256f100f52c573e419f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_ad690c1b05596d7f52e52ffeedd" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e1d54c0b9db3e2eb17faaf5919" ON "facet_value_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_ad690c1b05596d7f52e52ffeedd"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_653fb72a256f100f52c573e419f" PRIMARY KEY ("channelId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_653fb72a256f100f52c573e419f"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_e1d54c0b9db3e2eb17faaf5919c" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD "facetValueId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ad690c1b05596d7f52e52ffeed" ON "facet_value_channels_channel" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" DROP CONSTRAINT "PK_e1d54c0b9db3e2eb17faaf5919c"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "PK_653fb72a256f100f52c573e419f" PRIMARY KEY ("facetValueId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_beeb2b3cd800e589f2213ae99d6" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d194bff171b62357688a5d0f55" ON "product_variant_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_beeb2b3cd800e589f2213ae99d6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191" PRIMARY KEY ("channelId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_d194bff171b62357688a5d0f559" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_beeb2b3cd800e589f2213ae99d" ON "product_variant_channels_channel" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" DROP CONSTRAINT "PK_d194bff171b62357688a5d0f559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "PK_1a10ca648c3d73c0f2b455ae191" PRIMARY KEY ("productVariantId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_a28474836b2feeffcef98c806e1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_69567bc225b6bbbd732d6c5455b" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP COLUMN "facetValueId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD "facetValueId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0d641b761ed1dce4ef3cd33d55" ON "product_variant_facet_values_facet_value" ("facetValueId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_69567bc225b6bbbd732d6c5455b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_a28474836b2feeffcef98c806e1" PRIMARY KEY ("facetValueId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_a28474836b2feeffcef98c806e1"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_0d641b761ed1dce4ef3cd33d559" PRIMARY KEY ("facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_69567bc225b6bbbd732d6c5455" ON "product_variant_facet_values_facet_value" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" DROP CONSTRAINT "PK_0d641b761ed1dce4ef3cd33d559"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "PK_a28474836b2feeffcef98c806e1" PRIMARY KEY ("productVariantId", "facetValueId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_c57de5cb6bb74504180604a00c0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_526f0131260eec308a3bd2b61b6" PRIMARY KEY ("productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP COLUMN "productOptionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD "productOptionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e96a71affe63c97f7fa2f076da" ON "product_variant_options_product_option" ("productOptionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_526f0131260eec308a3bd2b61b6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_c57de5cb6bb74504180604a00c0" PRIMARY KEY ("productOptionId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_c57de5cb6bb74504180604a00c0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_e96a71affe63c97f7fa2f076dac" PRIMARY KEY ("productOptionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_526f0131260eec308a3bd2b61b" ON "product_variant_options_product_option" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" DROP CONSTRAINT "PK_e96a71affe63c97f7fa2f076dac"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "PK_c57de5cb6bb74504180604a00c0" PRIMARY KEY ("productVariantId", "productOptionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_39513fd02a573c848d23bee587d" PRIMARY KEY ("stockLocationId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ff8150fe54e56a900d5712671a" ON "stock_location_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_39513fd02a573c848d23bee587d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0" PRIMARY KEY ("channelId", "stockLocationId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_ff8150fe54e56a900d5712671a0" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP COLUMN "stockLocationId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD "stockLocationId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_39513fd02a573c848d23bee587" ON "stock_location_channels_channel" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" DROP CONSTRAINT "PK_ff8150fe54e56a900d5712671a0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "PK_e6f8b2d61ff58c51505c38da8a0" PRIMARY KEY ("stockLocationId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_39853134b20afe9dfb25de18292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_0d8e5c204480204a60e151e4853" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_d0d16db872499e83b15999f8c7" ON "order_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_0d8e5c204480204a60e151e4853"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_39853134b20afe9dfb25de18292" PRIMARY KEY ("channelId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_39853134b20afe9dfb25de18292"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_d0d16db872499e83b15999f8c7a" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_channels_channel" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD "orderId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0d8e5c204480204a60e151e485" ON "order_channels_channel" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" DROP CONSTRAINT "PK_d0d16db872499e83b15999f8c7a"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "PK_39853134b20afe9dfb25de18292" PRIMARY KEY ("orderId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_414600087d71aee1583bc517590"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_f80d84d525af2ffe974e7e8ca29" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP COLUMN "fulfillmentId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD "fulfillmentId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_4add5a5796e1582dec2877b289" ON "order_fulfillments_fulfillment" ("fulfillmentId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_f80d84d525af2ffe974e7e8ca29"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_414600087d71aee1583bc517590" PRIMARY KEY ("fulfillmentId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_414600087d71aee1583bc517590"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_4add5a5796e1582dec2877b2898" PRIMARY KEY ("fulfillmentId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP COLUMN "orderId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD "orderId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f80d84d525af2ffe974e7e8ca2" ON "order_fulfillments_fulfillment" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" DROP CONSTRAINT "PK_4add5a5796e1582dec2877b2898"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "PK_414600087d71aee1583bc517590" PRIMARY KEY ("orderId", "fulfillmentId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_67be0e40122ab30a62a9817efe0" PRIMARY KEY ("orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP COLUMN "promotionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD "promotionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_2c26b988769c0e3b0120bdef31" ON "order_promotions_promotion" ("promotionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_67be0e40122ab30a62a9817efe0"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92" PRIMARY KEY ("promotionId", "orderId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_2c26b988769c0e3b0120bdef31b" PRIMARY KEY ("promotionId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_promotions_promotion" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD "orderId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_67be0e40122ab30a62a9817efe" ON "order_promotions_promotion" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" DROP CONSTRAINT "PK_2c26b988769c0e3b0120bdef31b"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "PK_001dfe7435f3946fbc2d66a4e92" PRIMARY KEY ("orderId", "promotionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_f0a17b94aa5a162f0d422920eb2" PRIMARY KEY ("shippingMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f2b98dfb56685147bed509acc3" ON "shipping_method_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_f0a17b94aa5a162f0d422920eb2"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6" PRIMARY KEY ("channelId", "shippingMethodId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_f2b98dfb56685147bed509acc3d" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP COLUMN "shippingMethodId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD "shippingMethodId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_f0a17b94aa5a162f0d422920eb" ON "shipping_method_channels_channel" ("shippingMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" DROP CONSTRAINT "PK_f2b98dfb56685147bed509acc3d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "PK_c92b2b226a6ee87888d8dcd8bd6" PRIMARY KEY ("shippingMethodId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_6d9e2c39ab12391aaa374bcdaa4" PRIMARY KEY ("promotionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP COLUMN "channelId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_0eaaf0f4b6c69afde1e88ffb52" ON "promotion_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_6d9e2c39ab12391aaa374bcdaa4"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23" PRIMARY KEY ("channelId", "promotionId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_0eaaf0f4b6c69afde1e88ffb52d" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP COLUMN "promotionId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD "promotionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_6d9e2c39ab12391aaa374bcdaa" ON "promotion_channels_channel" ("promotionId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" DROP CONSTRAINT "PK_0eaaf0f4b6c69afde1e88ffb52d"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "PK_4b34f9b7bf95a8d3dc7f7f6dd23" PRIMARY KEY ("promotionId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_df0579886093b2f830c159adfde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_ca796020c6d097e251e5d6d2b02" PRIMARY KEY ("facetId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_channels_channel" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_2a8ea404d05bf682516184db7d" ON "facet_channels_channel" ("channelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_ca796020c6d097e251e5d6d2b02"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_df0579886093b2f830c159adfde" PRIMARY KEY ("channelId", "facetId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_df0579886093b2f830c159adfde"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_2a8ea404d05bf682516184db7d3" PRIMARY KEY ("channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_channels_channel" DROP COLUMN "facetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD "facetId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ca796020c6d097e251e5d6d2b0" ON "facet_channels_channel" ("facetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" DROP CONSTRAINT "PK_2a8ea404d05bf682516184db7d3"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "PK_df0579886093b2f830c159adfde" PRIMARY KEY ("facetId", "channelId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "webhook" DROP CONSTRAINT "PK_e6765510c2d078db49632b59020"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "webhook" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "webhook" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "webhook" ADD CONSTRAINT "PK_e6765510c2d078db49632b59020" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "job_record" DROP CONSTRAINT "PK_88ce3ea0c9dca8b571450b457a7"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "job_record" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "job_record" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "job_record" ADD CONSTRAINT "PK_88ce3ea0c9dca8b571450b457a7" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP COLUMN "productVariantAssetId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productVariantAssetId" integer`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "search_index_item" ADD "productAssetId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_6470dd173311562c89e5f80b30e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_15b7ccffbd4e81c360c4db89977" PRIMARY KEY ("languageCode", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "channelId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_15b7ccffbd4e81c360c4db89977"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_6470dd173311562c89e5f80b30e" PRIMARY KEY ("languageCode", "channelId", "productVariantId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_6470dd173311562c89e5f80b30e"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_b9cb3bc644b0725bbd40f1fc537" PRIMARY KEY ("languageCode", "channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "search_index_item" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" DROP CONSTRAINT "PK_b9cb3bc644b0725bbd40f1fc537"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "search_index_item" ADD CONSTRAINT "PK_6470dd173311562c89e5f80b30e" PRIMARY KEY ("languageCode", "productVariantId", "channelId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_3a05127e67435b4d2332ded7c9" ON "history_entry" ("orderId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "customerId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_43ac602f839847fdb91101f30e" ON "history_entry" ("customerId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "administratorId"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "administratorId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_92f8c334ef06275f9586fd0183" ON "history_entry" ("administratorId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" DROP CONSTRAINT "PK_b65bd95b0d2929668589d57b97a"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "history_entry" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "history_entry" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "PK_b65bd95b0d2929668589d57b97a" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "sellerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "sellerId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "UQ_1966e18ce6a39a82b19204704d7"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "userId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "REL_1966e18ce6a39a82b19204704d" UNIQUE ("userId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT "PK_ee58e71b3b4008b20ddc7b3092b"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "PK_ee58e71b3b4008b20ddc7b3092b" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_92f8c334ef06275f9586fd01832" FOREIGN KEY ("administratorId") REFERENCES "administrator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "FK_f5a1624b4e31b5f16c13690ed69" FOREIGN KEY ("administratorId") REFERENCES "administrator"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method" DROP CONSTRAINT "PK_7744c2b2dd932c9cf42f2b9bc3a"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment_method" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method" ADD CONSTRAINT "PK_7744c2b2dd932c9cf42f2b9bc3a" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "FK_5bcb569635ce5407eb3f264487d" FOREIGN KEY ("paymentMethodId") REFERENCES "payment_method"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment_method_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment_method_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_66187f782a3e71b9e0f5b50b68" ON "payment_method_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" DROP CONSTRAINT "PK_ae5ae0af71ae8d15da9eb75768b"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment_method_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD "id" SERIAL NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD CONSTRAINT "PK_ae5ae0af71ae8d15da9eb75768b" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_translation" ADD CONSTRAINT "FK_66187f782a3e71b9e0f5b50b68b" FOREIGN KEY ("baseId") REFERENCES "payment_method"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "global_settings" DROP CONSTRAINT "PK_fec5e2c0bf238e30b25d4a82976"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "global_settings" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "global_settings" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "global_settings" ADD CONSTRAINT "PK_fec5e2c0bf238e30b25d4a82976" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "countryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "countryId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_d87215343c3a3a67e6a0b7f3ea" ON "address" ("countryId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customerId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_dc34d382b493ade1f70e834c4d" ON "address" ("customerId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" DROP CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "UQ_3f62b42ed23958b120c235f74df"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "userId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "REL_3f62b42ed23958b120c235f74d" UNIQUE ("userId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" DROP CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "FK_b823a3c8bf3b78d3ed68736485c" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_43ac602f839847fdb91101f30ec" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_a842c9fe8cd4c8ff31402d172d7" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_1966e18ce6a39a82b19204704d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer" ADD CONSTRAINT "FK_3f62b42ed23958b120c235f74df" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "userId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_3d2f174ef04fb312fdebd0ddc5" ON "session" ("userId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "activeChannelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "activeChannelId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_eb87ef1e234444728138302263" ON "session" ("activeChannelId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "activeOrderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "activeOrderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_7a75399a4f4ffa48ee02e98c05" ON "session" ("activeOrderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" DROP CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role" DROP CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "role" ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "FK_bfd2a03e9988eda6a9d11760119" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "authentication_method" DROP COLUMN "userId"`, undefined);
        await queryRunner.query(`ALTER TABLE "authentication_method" ADD "userId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_00cbe87bc0d4e36758d61bd31d" ON "authentication_method" ("userId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" DROP CONSTRAINT "PK_e204686018c3c60f6164e385081"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "authentication_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "authentication_method" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "authentication_method" ADD CONSTRAINT "PK_e204686018c3c60f6164e385081" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "authentication_method" ADD CONSTRAINT "FK_00cbe87bc0d4e36758d61bd31d6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "defaultShippingZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "defaultShippingZoneId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_c9ca2f58d4517460435cbd8b4c" ON "channel" ("defaultShippingZoneId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "defaultTaxZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "defaultTaxZoneId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_afe9f917a1c82b9e9e69f7c612" ON "channel" ("defaultTaxZoneId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "sellerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "sellerId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_af2116c7e176b6b88dceceeb74" ON "channel" ("sellerId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" DROP CONSTRAINT "PK_590f33ee6ee7d76437acf362e39"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "channel" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "FK_ff8150fe54e56a900d5712671a0" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "FK_f2b98dfb56685147bed509acc3d" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_eb87ef1e234444728138302263b" FOREIGN KEY ("activeChannelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "role_channels_channel" ADD CONSTRAINT "FK_e09dfee62b158307404202b43a5" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "FK_0eaaf0f4b6c69afde1e88ffb52d" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "FK_d194bff171b62357688a5d0f559" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "FK_a51dfbd87c330c075c39832b6e7" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment_method_channels_channel" ADD CONSTRAINT "FK_c00e36f667d35031087b382e61b" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_d0d16db872499e83b15999f8c7a" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "FK_e1d54c0b9db3e2eb17faaf5919c" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "FK_2a8ea404d05bf682516184db7d3" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_channels_channel" ADD CONSTRAINT "FK_dc9f69207a8867f83b0fd257e30" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "FK_7216ab24077cf5cbece7857dbbd" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "FK_16ca9151a5153f1169da5b7b7e3" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator_channels_channel" ADD CONSTRAINT "FK_651689c2776497f2edf049b6473" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone" DROP CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "zone" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "zone" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "zone" ADD CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "FK_433f45158e4e2b2a2f344714b22" FOREIGN KEY ("zoneId") REFERENCES "zone"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "FK_afe9f917a1c82b9e9e69f7c6129" FOREIGN KEY ("defaultTaxZoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "customerGroupId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "customerGroupId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_8b5ab52fc8887c1a769b9276ca" ON "tax_rate" ("customerGroupId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "zoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "zoneId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_9872fc7de2f4e532fd3230d191" ON "tax_rate" ("zoneId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "categoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "categoryId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_7ee3306d7638aa85ca90d67219" ON "tax_rate" ("categoryId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" DROP CONSTRAINT "PK_23b71b53f650c0b39e99ccef4fd"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_rate" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_rate" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "PK_23b71b53f650c0b39e99ccef4fd" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_9872fc7de2f4e532fd3230d1915" FOREIGN KEY ("zoneId") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_group" DROP CONSTRAINT "PK_88e7da3ff7262d9e0a35aa3664e"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "customer_group" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_group" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "customer_group" ADD CONSTRAINT "PK_88e7da3ff7262d9e0a35aa3664e" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "customer_groups_customer_group" ADD CONSTRAINT "FK_85feea3f0e5e82133605f78db02" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_8b5ab52fc8887c1a769b9276caf" FOREIGN KEY ("customerGroupId") REFERENCES "customer_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "parentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "region" ADD "parentId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_ed0c8098ce6809925a437f42ae" ON "region" ("parentId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" DROP CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "region" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "region" ADD CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "zone_members_region" ADD CONSTRAINT "FK_b45b65256486a15a104e17d495c" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region" ADD CONSTRAINT "FK_ed0c8098ce6809925a437f42aec" FOREIGN KEY ("parentId") REFERENCES "region"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD CONSTRAINT "FK_d87215343c3a3a67e6a0b7f3ea9" FOREIGN KEY ("countryId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "region_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_1afd722b943c81310705fc3e61" ON "region_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" DROP CONSTRAINT "PK_3e0c9619cafbe579eeecfd88abc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "region_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "region_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "region_translation" ADD CONSTRAINT "PK_3e0c9619cafbe579eeecfd88abc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "region_translation" ADD CONSTRAINT "FK_1afd722b943c81310705fc3e612" FOREIGN KEY ("baseId") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "seller" DROP CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "seller" ADD CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_9e4a35ccd6c947cf154d6402c2a" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "channel" ADD CONSTRAINT "FK_af2116c7e176b6b88dceceeb74b" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" ADD "featuredAssetId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_7256fef1bb42f1b38156b7449f" ON "collection" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "parentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" ADD "parentId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection" DROP CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "FK_6faa7b72422d9c4679e2f186ad1" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_closure" ADD CONSTRAINT "FK_457784c710f8ac9396010441f6c" FOREIGN KEY ("id_descendant") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_channels_channel" ADD CONSTRAINT "FK_cdbf33ffb5d4519161251520083" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "FK_4257b61275144db89fa0f5dc059" FOREIGN KEY ("parentId") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_e329f9036210d75caa1d8f2154" ON "collection_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" DROP CONSTRAINT "PK_bb49cfcde50401eb5f463a84dac"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_translation" ADD CONSTRAINT "PK_bb49cfcde50401eb5f463a84dac" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_translation" ADD CONSTRAINT "FK_e329f9036210d75caa1d8f2154a" FOREIGN KEY ("baseId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" DROP CONSTRAINT "PK_a2adab6fd086adfb7858f1f110c"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "PK_a2adab6fd086adfb7858f1f110c" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "collectionId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD "collectionId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_1ed9e48dfbf74b5fcbb35d3d68" ON "collection_asset" ("collectionId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "collection_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "collection_asset" ADD "assetId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_51da53b26522dc0525762d2de8" ON "collection_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "FK_1ed9e48dfbf74b5fcbb35d3d686" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset" DROP CONSTRAINT "PK_1209d107fe21482beaea51b745e"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "asset" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "asset" ADD CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_asset" ADD CONSTRAINT "FK_51da53b26522dc0525762d2de8e" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection" ADD CONSTRAINT "FK_7256fef1bb42f1b38156b7449f5" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "FK_9e412b00d4c6cee1a4b3d920716" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_channels_channel" ADD CONSTRAINT "FK_dc4e7435f9f5e9e6436bebd33bb" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tag" DROP CONSTRAINT "PK_8e4052373c579afc1471f526760"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "tag" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tag" ADD CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "asset_tags_tag" ADD CONSTRAINT "FK_fb5e800171ffbe9823f2cc727fd" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "featuredAssetId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_91a19e6613534949a4ce6e76ff" ON "product" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "FK_6a0558e650d75ae639ff38e413a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_channels_channel" ADD CONSTRAINT "FK_26d12be3b5fec6c4adb1d792844" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_7dbc75cb4e8b002620c4dbfdac" ON "product_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" DROP CONSTRAINT "PK_62d00fbc92e7a495701d6fee9d5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_translation" ADD CONSTRAINT "PK_62d00fbc92e7a495701d6fee9d5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_translation" ADD CONSTRAINT "FK_7dbc75cb4e8b002620c4dbfdac5" FOREIGN KEY ("baseId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" DROP CONSTRAINT "PK_c56a83efd14ec4175532e1867fc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "PK_c56a83efd14ec4175532e1867fc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" ADD "productId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_0d1294f5c22a56da7845ebab72" ON "product_asset" ("productId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_asset" ADD "assetId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_5888ac17b317b93378494a1062" ON "product_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "FK_0d1294f5c22a56da7845ebab72c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_asset" ADD CONSTRAINT "FK_5888ac17b317b93378494a10620" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value" DROP COLUMN "facetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value" ADD "facetId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_d101dc2265a7341be3d94968c5" ON "facet_value" ("facetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" DROP CONSTRAINT "PK_d231e8eecc7e1a6059e1da7d325"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value" ADD CONSTRAINT "PK_d231e8eecc7e1a6059e1da7d325" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "FK_0d641b761ed1dce4ef3cd33d559" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_facet_values_facet_value" ADD CONSTRAINT "FK_06e7d73673ee630e8ec50d0b29f" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_channels_channel" ADD CONSTRAINT "FK_ad690c1b05596d7f52e52ffeedd" FOREIGN KEY ("facetValueId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_3d6e45823b65de808a66cb1423" ON "facet_value_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" DROP CONSTRAINT "PK_a09fdeb788deff7a9ed827a6160"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_value_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_value_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" ADD CONSTRAINT "PK_a09fdeb788deff7a9ed827a6160" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value_translation" ADD CONSTRAINT "FK_3d6e45823b65de808a66cb1423b" FOREIGN KEY ("baseId") REFERENCES "facet_value"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "taxCategoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "taxCategoryId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_e38dca0d82fd64c7cf8aac8b8e" ON "product_variant" ("taxCategoryId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "featuredAssetId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_0e6f516053cf982b537836e21c" ON "product_variant" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "productId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_6e420052844edf3a5506d863ce" ON "product_variant" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" DROP CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_0e6f516053cf982b537836e21cf" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "FK_526f0131260eec308a3bd2b61b6" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_facet_values_facet_value" ADD CONSTRAINT "FK_69567bc225b6bbbd732d6c5455b" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_channels_channel" ADD CONSTRAINT "FK_beeb2b3cd800e589f2213ae99d6" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "collection_product_variants_product_variant" ADD CONSTRAINT "FK_fb05887e2867365f236d7dd95ee" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_420f4d6fb75d38b9dca79bc43b" ON "product_variant_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" DROP CONSTRAINT "PK_4b7f882e2b669800bed7ed065f0"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD "id" SERIAL NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD CONSTRAINT "PK_4b7f882e2b669800bed7ed065f0" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_translation" ADD CONSTRAINT "FK_420f4d6fb75d38b9dca79bc43b4" FOREIGN KEY ("baseId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "variantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ADD "variantId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_e6126cd268aea6e9b31d89af9a" ON "product_variant_price" ("variantId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "channelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ADD "channelId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" DROP CONSTRAINT "PK_ba659ff2940702124e799c5c854"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_price" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD CONSTRAINT "PK_ba659ff2940702124e799c5c854" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_price" ADD CONSTRAINT "FK_e6126cd268aea6e9b31d89af9ab" FOREIGN KEY ("variantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP CONSTRAINT "PK_cb1e33ae13779da176f8b03a5d3"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_asset" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant_asset" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "PK_cb1e33ae13779da176f8b03a5d3" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" DROP COLUMN "productVariantId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_fa21412afac15a2304f3eb35fe" ON "product_variant_asset" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_variant_asset" DROP COLUMN "assetId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD "assetId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_10b5a2e3dee0e30b1e26c32f5c" ON "product_variant_asset" ("assetId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "FK_fa21412afac15a2304f3eb35feb" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_asset" ADD CONSTRAINT "FK_10b5a2e3dee0e30b1e26c32f5c7" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "stockLocationId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD "stockLocationId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_984c48572468c69661a0b7b049" ON "stock_level" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_9950eae3180f39c71978748bd0" ON "stock_level" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" DROP CONSTRAINT "PK_88ff7d9dfb57dc9d435e365eb69"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_level" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_level" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "PK_88ff7d9dfb57dc9d435e365eb69" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "IDX_7fc20486b8cfd33dc84c96e168" ON "stock_level" ("productVariantId", "stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "FK_9950eae3180f39c71978748bd08" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option" DROP COLUMN "groupId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option" ADD "groupId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_a6debf9198e2fbfa006aa10d71" ON "product_option" ("groupId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" DROP CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option" ADD CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant_options_product_option" ADD CONSTRAINT "FK_e96a71affe63c97f7fa2f076dac" FOREIGN KEY ("productOptionId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_a79a443c1f7841f3851767faa6" ON "product_option_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" DROP CONSTRAINT "PK_69c79a84baabcad3c7328576ac0"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD "id" SERIAL NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD CONSTRAINT "PK_69c79a84baabcad3c7328576ac0" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_translation" ADD CONSTRAINT "FK_a79a443c1f7841f3851767faa6d" FOREIGN KEY ("baseId") REFERENCES "product_option"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_group" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_group" ADD "productId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_a6e91739227bf4d442f23c52c7" ON "product_option_group" ("productId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" DROP CONSTRAINT "PK_d76e92fdbbb5a2e6752ffd4a2c1"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_group" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_option_group" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group" ADD CONSTRAINT "PK_d76e92fdbbb5a2e6752ffd4a2c1" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group" ADD CONSTRAINT "FK_a6e91739227bf4d442f23c52c75" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option" ADD CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710" FOREIGN KEY ("groupId") REFERENCES "product_option_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP COLUMN "baseId"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD "baseId" integer`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_93751abc1451972c02e033b766" ON "product_option_group_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" DROP CONSTRAINT "PK_44ab19f118175288dff147c4a00"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product_option_group_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD "id" SERIAL NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD CONSTRAINT "PK_44ab19f118175288dff147c4a00" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_option_group_translation" ADD CONSTRAINT "FK_93751abc1451972c02e033b766c" FOREIGN KEY ("baseId") REFERENCES "product_option_group"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_239cfca2a55b98b90b6bef2e44" ON "order_line" ("orderId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "featuredAssetId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "featuredAssetId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_9f065453910ea77d4be8e92618" ON "order_line" ("featuredAssetId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "taxCategoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "taxCategoryId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_77be94ce9ec650446617946227" ON "order_line" ("taxCategoryId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD "productVariantId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_cbcd22193eda94668e84d33f18" ON "order_line" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "shippingLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "shippingLineId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_dc9ac68b47da7b62249886affb" ON "order_line" ("shippingLineId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "sellerChannelId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "sellerChannelId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_6901d8715f5ebadd764466f7bd" ON "order_line" ("sellerChannelId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" DROP CONSTRAINT "PK_01a7c973d9f30479647e44f9892"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "PK_01a7c973d9f30479647e44f9892" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_9f065453910ea77d4be8e92618f" FOREIGN KEY ("featuredAssetId") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_cbcd22193eda94668e84d33f185" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_6901d8715f5ebadd764466f7bde" FOREIGN KEY ("sellerChannelId") REFERENCES "channel"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_category" DROP CONSTRAINT "PK_2432988f825c336d5584a96cded"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "tax_category" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "tax_category" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "tax_category" ADD CONSTRAINT "PK_2432988f825c336d5584a96cded" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "tax_rate" ADD CONSTRAINT "FK_7ee3306d7638aa85ca90d672198" FOREIGN KEY ("categoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_e38dca0d82fd64c7cf8aac8b8ef" FOREIGN KEY ("taxCategoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_77be94ce9ec6504466179462275" FOREIGN KEY ("taxCategoryId") REFERENCES "tax_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "orderLineId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "orderLineId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_d2c8d5fca981cc820131f81aa8" ON "stock_movement" ("orderLineId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "productVariantId"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "productVariantId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_e65ba3882557cab4febb54809b" ON "stock_movement" ("productVariantId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "stockLocationId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD "stockLocationId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_a2fe7172eeae9f1cca86f8f573" ON "stock_movement" ("stockLocationId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" DROP CONSTRAINT "PK_9fe1232f916686ae8cf00294749"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_movement" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_movement" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "PK_9fe1232f916686ae8cf00294749" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_d2c8d5fca981cc820131f81aa83" FOREIGN KEY ("orderLineId") REFERENCES "order_line"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_e65ba3882557cab4febb54809bb" FOREIGN KEY ("productVariantId") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location" DROP CONSTRAINT "PK_adf770067d0df1421f525fa25cc"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "stock_location" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "stock_location" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "stock_location" ADD CONSTRAINT "PK_adf770067d0df1421f525fa25cc" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_movement" ADD CONSTRAINT "FK_a2fe7172eeae9f1cca86f8f573a" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_location_channels_channel" ADD CONSTRAINT "FK_39513fd02a573c848d23bee587d" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "stock_level" ADD CONSTRAINT "FK_984c48572468c69661a0b7b0494" FOREIGN KEY ("stockLocationId") REFERENCES "stock_location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "taxZoneId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "taxZoneId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customerId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "customerId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_124456e637cca7a415897dce65" ON "order" ("customerId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "aggregateOrderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "aggregateOrderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_73a78d7df09541ac5eba620d18" ON "order" ("aggregateOrderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "session" ADD CONSTRAINT "FK_7a75399a4f4ffa48ee02e98c059" FOREIGN KEY ("activeOrderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "FK_67be0e40122ab30a62a9817efe0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_239cfca2a55b98b90b6bef2e44f" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "FK_f80d84d525af2ffe974e7e8ca29" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_channels_channel" ADD CONSTRAINT "FK_0d8e5c204480204a60e151e4853" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order" ADD CONSTRAINT "FK_73a78d7df09541ac5eba620d181" FOREIGN KEY ("aggregateOrderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "history_entry" ADD CONSTRAINT "FK_3a05127e67435b4d2332ded7c9e" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_c9f34a440d490d1b66f6829b86" ON "shipping_line" ("orderId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "shippingMethodId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD "shippingMethodId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e2e7642e1e88167c1dfc827fdf" ON "shipping_line" ("shippingMethodId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" DROP CONSTRAINT "PK_890522bfc44a4b6eb7cb1e52609"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_line" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_line" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "PK_890522bfc44a4b6eb7cb1e52609" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "FK_c9f34a440d490d1b66f6829b86c" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line" ADD CONSTRAINT "FK_dc9ac68b47da7b62249886affba" FOREIGN KEY ("shippingLineId") REFERENCES "shipping_line"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method" DROP CONSTRAINT "PK_b9b0adfad3c6b99229c1e7d4865"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_method" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method" ADD CONSTRAINT "PK_b9b0adfad3c6b99229c1e7d4865" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_channels_channel" ADD CONSTRAINT "FK_f0a17b94aa5a162f0d422920eb2" FOREIGN KEY ("shippingMethodId") REFERENCES "shipping_method"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ADD CONSTRAINT "FK_e2e7642e1e88167c1dfc827fdf3" FOREIGN KEY ("shippingMethodId") REFERENCES "shipping_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_85ec26c71067ebc84adcd98d1a" ON "shipping_method_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" DROP CONSTRAINT "PK_b862a1fac1c6e1fd201eadadbcb"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "shipping_method_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD "id" SERIAL NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD CONSTRAINT "PK_b862a1fac1c6e1fd201eadadbcb" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_method_translation" ADD CONSTRAINT "FK_85ec26c71067ebc84adcd98d1a5" FOREIGN KEY ("baseId") REFERENCES "shipping_method"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion" DROP CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion" ADD CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_channels_channel" ADD CONSTRAINT "FK_6d9e2c39ab12391aaa374bcdaa4" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_promotions_promotion" ADD CONSTRAINT "FK_2c26b988769c0e3b0120bdef31b" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "promotion_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "promotion_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_1cc009e9ab2263a35544064561" ON "promotion_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" DROP CONSTRAINT "PK_0b4fd34d2fc7abc06189494a178"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "promotion_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "promotion_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" ADD CONSTRAINT "PK_0b4fd34d2fc7abc06189494a178" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "promotion_translation" ADD CONSTRAINT "FK_1cc009e9ab2263a35544064561b" FOREIGN KEY ("baseId") REFERENCES "promotion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "UQ_cb66b63b6e97613013795eadbd5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "refundId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "refundId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "REL_cb66b63b6e97613013795eadbd" UNIQUE ("refundId")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "UQ_ad2991fa2933ed8b7f86a716338"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "paymentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "paymentId" integer`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "REL_ad2991fa2933ed8b7f86a71633" UNIQUE ("paymentId")`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_1df5bc14a47ef24d2e681f4559" ON "order_modification" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" DROP CONSTRAINT "PK_cccf2e1612694eeb1e5b6760ffa"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_modification" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_modification" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "PK_cccf2e1612694eeb1e5b6760ffa" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_1df5bc14a47ef24d2e681f45598" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "orderModificationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" ADD "orderModificationId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_a49c5271c39cc8174a0535c808" ON "surcharge" ("orderModificationId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_154eb685f9b629033bd266df7f" ON "surcharge" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" DROP CONSTRAINT "PK_a62b89257bcc802b5d77346f432"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "surcharge" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "surcharge" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "PK_a62b89257bcc802b5d77346f432" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "FK_a49c5271c39cc8174a0535c8088" FOREIGN KEY ("orderModificationId") REFERENCES "order_modification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "surcharge" ADD CONSTRAINT "FK_154eb685f9b629033bd266df7fa" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "orderId"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD "orderId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_d09d285fe1645cd2f0db811e29" ON "payment" ("orderId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "payment" ADD CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD CONSTRAINT "FK_d09d285fe1645cd2f0db811e293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_ad2991fa2933ed8b7f86a716338" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "refund" DROP COLUMN "paymentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "refund" ADD "paymentId" integer NOT NULL`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_1c6932a756108788a361e7d440" ON "refund" ("paymentId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" DROP CONSTRAINT "PK_f1cefa2e60d99b206c46c1116e5"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "refund" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "refund" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "refund" ADD CONSTRAINT "PK_f1cefa2e60d99b206c46c1116e5" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "refund" ADD CONSTRAINT "FK_1c6932a756108788a361e7d4404" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_modification" ADD CONSTRAINT "FK_cb66b63b6e97613013795eadbd5" FOREIGN KEY ("refundId") REFERENCES "refund"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "fulfillment" DROP CONSTRAINT "PK_50c102da132afffae660585981f"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "fulfillment" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "fulfillment" ADD CONSTRAINT "PK_50c102da132afffae660585981f" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_fulfillments_fulfillment" ADD CONSTRAINT "FK_4add5a5796e1582dec2877b2898" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "refundId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "refundId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_30019aa65b17fe9ee962893199" ON "order_line_reference" ("refundId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "orderLineId"`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD "orderLineId" integer NOT NULL`,
            undefined,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_7d57857922dfc7303604697dbe" ON "order_line_reference" ("orderLineId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "modificationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "modificationId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_22b818af8722746fb9f206068c" ON "order_line_reference" ("modificationId") `,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "fulfillmentId"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "fulfillmentId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_06b02fb482b188823e419d37bd" ON "order_line_reference" ("fulfillmentId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" DROP CONSTRAINT "PK_21891d07accb8fa87e11165bca2"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "order_line_reference" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "order_line_reference" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "PK_21891d07accb8fa87e11165bca2" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_30019aa65b17fe9ee9628931991" FOREIGN KEY ("refundId") REFERENCES "refund"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_7d57857922dfc7303604697dbe9" FOREIGN KEY ("orderLineId") REFERENCES "order_line"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_22b818af8722746fb9f206068c2" FOREIGN KEY ("modificationId") REFERENCES "order_modification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "order_line_reference" ADD CONSTRAINT "FK_06b02fb482b188823e419d37bd4" FOREIGN KEY ("fulfillmentId") REFERENCES "fulfillment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet" DROP CONSTRAINT "PK_a0ebfe3c68076820c6886aa9ff3"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet" ADD CONSTRAINT "PK_a0ebfe3c68076820c6886aa9ff3" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_value" ADD CONSTRAINT "FK_d101dc2265a7341be3d94968c5b" FOREIGN KEY ("facetId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_channels_channel" ADD CONSTRAINT "FK_ca796020c6d097e251e5d6d2b02" FOREIGN KEY ("facetId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_translation" DROP COLUMN "baseId"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_translation" ADD "baseId" integer`, undefined);
        await queryRunner.query(
            `CREATE INDEX "IDX_eaea53f44bf9e97790d38a3d68" ON "facet_translation" ("baseId") `,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" DROP CONSTRAINT "PK_a6902cc1dcbb5e52a980f0189ad"`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "facet_translation" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "facet_translation" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(
            `ALTER TABLE "facet_translation" ADD CONSTRAINT "PK_a6902cc1dcbb5e52a980f0189ad" PRIMARY KEY ("id")`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "facet_translation" ADD CONSTRAINT "FK_eaea53f44bf9e97790d38a3d68f" FOREIGN KEY ("baseId") REFERENCES "facet"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
    }
}
