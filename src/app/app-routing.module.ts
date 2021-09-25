import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  //{path:'home',component:HomeComponent},
 {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
 
  {path:'login',component:SignInComponent},
  {path:'register',component:SignUpComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

