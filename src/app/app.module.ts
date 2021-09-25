import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
//import { ConfigService } from './config/config.service';
import { AboutUsModule } from './about-us/about-us.module';
import { RegisterModule } from './register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AboutUsModule,
    RegisterModule,
    BrowserAnimationsModule,
    //MatMenuModule
    
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
