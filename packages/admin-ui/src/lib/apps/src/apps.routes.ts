import { Routes } from '@angular/router';

import { AppsComponent } from './components/apps.component';

export const appsRoutes: Routes = [
    {
        path: '',
        component: AppsComponent,
        pathMatch: 'full',
    },
];
