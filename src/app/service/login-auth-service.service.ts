import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthServiceService {

  constructor() { }

  validateLoginDetail(loginForm: FormGroup) : boolean{

    if(loginForm.value.username="aa" && loginForm.value.password =="aa"){
      return true
    }else{
      return ;
    }
  }
}
