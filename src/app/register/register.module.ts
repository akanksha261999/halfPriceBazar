import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterformComponent } from './registerform/registerform.component';


@NgModule({
  declarations: [
    RegisterformComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegisterformComponent
  ]
})
export class RegisterModule { }
