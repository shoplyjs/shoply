import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shoplyjs/admin-ui/core';
import { ReactWrapperComponent } from '../../core/src/components/react-wrapper/react-wrapper.component';
import { appsRoutes } from './apps.routes';
import { AppsComponent } from './components/apps.component';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(appsRoutes)],
    declarations: [AppsComponent, ReactWrapperComponent],
})
export class AppsModule {
    constructor() {
        // empty
    }
}
