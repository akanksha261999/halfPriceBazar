import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
       SignUpComponent,
       SignInComponent,
       HomeComponent
  ]
})
export class UserModule { }
