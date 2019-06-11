import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginAuthServiceService } from '../service/login-auth-service.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loginError:string
  public data:any=[]
  public key = "username";

  constructor(private router : Router,private formBuilder: FormBuilder,
    private loginService : LoginAuthServiceService,@Inject(SESSION_STORAGE) private storage: WebStorageService){
      
  }

  ngOnInit() {
   this.loginForm =this.formBuilder.group({
      username : ['', Validators.required],
      password:['',Validators.required]
    });
     this.loginError=null;
  }

  get f(){
     // convenience getter for easy access to form fields
    { 
      return this.loginForm.controls;
    }
  }

/**
Method is exposed to to 
 */
  AddUser(){     

    this.submitted = true;
    this.loginError=null;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    if(this.loginForm.value.username=='aa' && this.loginForm.value.password=='bb'){
          console.log("AddUser is called");
          this.loginError=null;
          this.storage.set(this.key, this.loginForm.value.username);
          this.data= this.storage.get(this.key);
          console.log("Key is :::: " + this.data);
          this.router.navigate(['/app-welcome']);
    }else{
      this.loginError="Invalid UserName or Password. Please try Again|"
    }    
   
}

}
