import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { ReactWrapperComponent } from './components/react-wrapper/react-wrapper.component';

@NgModule({
    imports: [SharedModule, CoreModule],
    declarations: [AppComponent, ReactWrapperComponent],
    exports: [AppComponent],
})
export class AppComponentModule {}
