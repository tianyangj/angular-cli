import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashComponent } from './splash.component';
import { routing } from './splash.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        SplashComponent
    ]
})
export class SplashModule { }