import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddztcComponent } from './addztc/addztc.component';
import { HttpClientModule } from '@angular/common/http';
import { ZtcConfigServiceService } from './ztc-config-service.service';
import { GetztcdetailComponent } from './getztcdetail/getztcdetail.component';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchztcdetailComponent } from './searchztcdetail/searchztcdetail.component';
import { UpdateZtcConfigComponent } from './update-ztc-config/update-ztc-config.component'; // <-- import the module
import {MatDialogModule, MatCardModule, MatIconModule, MatToolbarModule, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StbztcoverrideComponent } from './stbztcoverride/stbztcoverride.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    AddztcComponent,
    GetztcdetailComponent,
    SearchztcdetailComponent,
    UpdateZtcConfigComponent,
    StbztcoverrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule ,
    NgxPaginationModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [ZtcConfigServiceService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
