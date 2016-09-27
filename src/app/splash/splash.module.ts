import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash.component';

const routes: Routes = [
    { path: '', component: SplashComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SplashComponent
    ]
})
export class SplashModule { }