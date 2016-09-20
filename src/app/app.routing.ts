import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);