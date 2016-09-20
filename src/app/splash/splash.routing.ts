import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SplashComponent } from './splash.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: SplashComponent }
]);
