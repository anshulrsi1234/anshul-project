import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AddztcComponent } from './addztc/addztc.component';

const routes: Routes = [
 { 
   path : 'app-registration', 
   component :RegistrationComponent
},
 { 
   path : 'app-welcome',
   component :WelcomeComponent
 },
 { 
   path : 'app-login', 
   component :LoginComponent
 },
 {
    path : 'app-addztc', 
    component :AddztcComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
