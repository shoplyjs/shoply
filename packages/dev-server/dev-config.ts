/* eslint-disable no-console */
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AdminUiPlugin } from '@shoplyjs/admin-ui-plugin';
import { AssetServerPlugin } from '@shoplyjs/asset-server-plugin';
import { ADMIN_API_PATH, API_PORT, SHOP_API_PATH } from '@shoplyjs/common/lib/shared-constants';
import {
    DefaultJobQueuePlugin,
    DefaultLogger,
    DefaultSearchPlugin,
    dummyPaymentHandler,
    LogLevel,
    VendureConfig,
} from '@shoplyjs/core';
import { defaultEmailHandlers, EmailPlugin } from '@shoplyjs/email-plugin';
import 'dotenv/config';
import { MolliePlugin } from '@shoplyjs/payments-plugin/package/mollie';
import { StripePlugin } from '@shoplyjs/payments-plugin/package/stripe';
import path from 'path';
import { DataSourceOptions } from 'typeorm';

const isDev = process.env.APP_ENV === 'dev';

/**
 * Config settings used during development
 */
export const devConfig: VendureConfig = {
    apiOptions: {
        port: API_PORT,
        adminApiPlayground: false,
        shopApiPlayground: false,
        apolloServerPlugins: isDev ? [ApolloServerPluginLandingPageLocalDefault()] : [],
    },
    authOptions: {
        disableAuth: false,
        tokenMethod: ['bearer', 'cookie'] as const,
        requireVerification: true,
        customPermissions: [],
        cookieOptions: {
            secret: 'abc',
        },
    },
    dbConnectionOptions: {
        synchronize: false,
        logging: false,
        migrations: [path.join(__dirname, 'migrations/*.ts')],
        ...getDbConfig(),
    },
    paymentOptions: {
        paymentMethodHandlers: [dummyPaymentHandler],
    },

    customFields: {},
    logger: new DefaultLogger({ level: LogLevel.Verbose }),
    importExportOptions: {
        importAssetsDir: path.join(__dirname, 'import-assets'),
    },
    plugins: [
        MolliePlugin.init({ vendureHost: process.env.MOLLIE_HOST || 'http://localhost:3000' }),
        StripePlugin.init({}),
        // MultivendorPlugin.init({
        //     platformFeePercent: 10,
        //     platformFeeSKU: 'FEE',
        // }),
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: path.join(__dirname, 'assets'),
        }),
        DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: false }),
        // Enable if you need to debug the job queue
        // BullMQJobQueuePlugin.init({}),
        DefaultJobQueuePlugin.init({}),
        // JobQueueTestPlugin.init({ queueCount: 10 }),
        // ElasticsearchPlugin.init({
        //     host: 'http://localhost',
        //     port: 9200,
        //     bufferUpdates: true,
        // }),
        EmailPlugin.init({
            devMode: true,
            route: 'mailbox',
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../email-plugin/templates'),
            outputPath: path.join(__dirname, 'test-emails'),
            globalTemplateVars: {
                verifyEmailAddressUrl: 'http://localhost:4201/verify',
                passwordResetUrl: 'http://localhost:4201/reset-password',
                changeEmailAddressUrl: 'http://localhost:4201/change-email-address',
            },
        }),
        AdminUiPlugin.init({
            route: 'admin',
            port: 5001,
            // Un-comment to compile a custom admin ui
            // app: compileUiExtensions({
            //     outputPath: path.join(__dirname, './custom-admin-ui'),
            //     extensions: [
            //         {
            //             id: 'ui-extensions-library',
            //             extensionPath: path.join(__dirname, 'example-plugins/ui-extensions-library/ui'),
            //             routes: [{ route: 'ui-library', filePath: 'routes.ts' }],
            //             providers: ['providers.ts'],
            //         },
            //         {
            //             globalStyles: path.join(
            //                 __dirname,
            //                 'test-plugins/with-ui-extension/ui/custom-theme.scss',
            //             ),
            //         },
            //     ],
            //     devMode: true,
            // }),
        }),
    ],
};

function getDbConfig(): DataSourceOptions {
    const dbType = process.env.DB || 'mysql';
    console.log('Using db type', dbType);
    switch (dbType) {
        case 'postgres':
            console.log('Using postgres connection');
            return {
                synchronize: false,
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: Number(process.env.DB_PORT) || 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'postgres',
                database: process.env.DB_NAME || 'vendure',
                schema: process.env.DB_SCHEMA || 'public',
            };
        case 'sqlite':
            console.log('Using sqlite connection');
            return {
                synchronize: false,
                type: 'better-sqlite3',
                database: path.join(__dirname, 'vendure.sqlite'),
            };
        case 'sqljs':
            console.log('Using sql.js connection');
            return {
                type: 'sqljs',
                autoSave: true,
                database: new Uint8Array([]),
                location: path.join(__dirname, 'vendure.sqlite'),
            };
        case 'mysql':
        default:
            console.log('Using mysql connection');
            return {
                synchronize: true,
                type: 'mariadb',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '',
                database: 'vendure-dev',
            };
    }
}
