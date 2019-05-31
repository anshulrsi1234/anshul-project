import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { ZtcConfigServiceService } from '../ztc-config-service.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-addztc',
  templateUrl: './addztc.component.html', 
  styleUrls: ['./addztc.component.css']
})
export class AddztcComponent implements OnInit {

  addZTCForm : FormGroup;
  submitted : boolean =  false;
  isSavedSucessFull:boolean =false;
  results : string;
  response : string;
  ztcError : string
  mac:String;

  constructor(private form:FormBuilder,private route : Router,private ztcService : ZtcConfigServiceService) { 

  }

  ngOnInit() {
    
    this.addZTCForm = this.form.group({
      BEPID : ['',Validators.required],
      TVSSID:['',Validators.required],
      hardwareVersion:['', Validators.required],
      serialNumber :['',Validators.required],
      mac :['',Validators.required]
    });

  }
  

  get f(){
    // convenience getter for easy access to form fields
   { 
     return this.addZTCForm.controls;
   }
}



  AddZTCConfig(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.addZTCForm.invalid) {
      return;
    }
let formObj = this.addZTCForm.getRawValue(); 
    let stbZTC = JSON.stringify(formObj);
    console.log('Add Button clicked: ' + stbZTC);

    this.mac = this.addZTCForm.value.mac
    console.log("MAC is ::: " + this.mac);

    console.log("ADD Ztc is going to call");
    this.ztcService.sendToBEPZTC(stbZTC,this.mac).subscribe( 
      data => {
        console.log("Record Added successfully !", data);        
        this.results = data as string;       
      },           
      error => {        
        this.ztcError =  this.handleErrorObservable(error);
        console.error("Exception occured in BEPZTC is ::: ", this.ztcError) 
        this.results= null;
      }             
    );
   }

   getBEPZTCConfigDetail(){

    console.log("GET Ztc is going to call");
    
    this.ztcService.getBEPZTCConfig().subscribe(
        data => {
          console.log("success!", data); 
          let stbZTCJSOn = JSON.stringify(data); 
          this.results = stbZTCJSOn;
          this.ztcError = null;
        },                      
      error => {        
        this.ztcError =  this.handleErrorObservable(error);
        console.error("Exception occured in BEPZTC is ::: ", this.ztcError) 
        this.results= null;
      }    
    );   
   
          
   }

    /**
    * Method is exposed to to reurn BEPZTC error object
    * @param error 
    */
   private handleErrorObservable (error: HttpErrorResponse) {
    const descriptionMessage = error.error;
    return descriptionMessage;    
  }
  
}
