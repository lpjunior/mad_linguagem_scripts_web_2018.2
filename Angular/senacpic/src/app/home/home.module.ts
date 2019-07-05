import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [     
        HomeComponent,
        SignInComponent 
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }