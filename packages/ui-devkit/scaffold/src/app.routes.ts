import { Route } from '@angular/router';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { AppShellComponent, AuthGuard } from '@shoplyjs/admin-ui/core';

import { extensionRoutes } from './extension.routes';

export const routes: Route[] = [
    { path: 'login', loadChildren: () => import('@shoplyjs/admin-ui/login').then(m => m.LoginModule) },
    {
        path: '',
        canActivate: [AuthGuard],
        component: AppShellComponent,
        data: {
            breadcrumb: _('breadcrumb.dashboard'),
        },
        children: [
            // Defining the extension routes before the built-in routes allows
            // the extension routes to take precedence over the built-in routes, enabling
            // the extensions to override built-in functionality.
            ...extensionRoutes,
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import('@shoplyjs/admin-ui/dashboard').then(m => m.DashboardModule),
            },
            {
                path: 'catalog',
                loadChildren: () => import('@shoplyjs/admin-ui/catalog').then(m => m.CatalogModule),
            },
            {
                path: 'customer',
                loadChildren: () => import('@shoplyjs/admin-ui/customer').then(m => m.CustomerModule),
            },
            {
                path: 'orders',
                loadChildren: () => import('@shoplyjs/admin-ui/order').then(m => m.OrderModule),
            },
            {
                path: 'marketing',
                loadChildren: () => import('@shoplyjs/admin-ui/marketing').then(m => m.MarketingModule),
            },
            {
                path: 'settings',
                loadChildren: () => import('@shoplyjs/admin-ui/settings').then(m => m.SettingsModule),
            },
            {
                path: 'system',
                loadChildren: () => import('@shoplyjs/admin-ui/system').then(m => m.SystemModule),
            },
        ],
    },
];
