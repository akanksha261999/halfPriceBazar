import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopbarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
     TopbarComponent,
     NavbarComponent,
     FooterComponent
  ]
})
export class HeaderModule { }
