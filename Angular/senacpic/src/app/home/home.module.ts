import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [     
        HomeComponent,
        SignInComponent 
    ],
})
export class HomeModule { }