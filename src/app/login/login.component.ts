import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private router : Router,private formBuilder: FormBuilder){
      
  }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      username : ['', Validators.required],
      password:['',Validators.required]
    });
  }

  get f(){
     // convenience getter for easy access to form fields
    { 
      return this.loginForm.controls;
    }
  }

  AddUser(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log("AddUser is called");
    this.router.navigate(['/app-welcome']);
  }

}
