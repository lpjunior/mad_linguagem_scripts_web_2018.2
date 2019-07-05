import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [     
        HomeComponent,
        SignInComponent,
        SignupComponent 
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }