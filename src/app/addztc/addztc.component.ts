import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { ZtcConfigServiceService } from '../ztc-config-service.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  mac:string;

  constructor(private form:FormBuilder,private route : Router,private ztcService : ZtcConfigServiceService,
     private dialogRef: MatDialogRef<AddztcComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  ngOnInit() {
    
    this.addZTCForm = this.form.group({
      ID: [this.data.ID],
      BEPID: [this.data.BEPID,Validators.required],
      TVSSID:[this.data.TVSSID,Validators.required],
      hardwareVersion:[this.data.hardwareVersion, Validators.required],
      serialNumber:[this.data.serialNumber,Validators.required],
      mac:[this.data.mac,Validators.required]
    });

  }
  

  get f(){
    // convenience getter for easy access to form fields
   { 
     return this.addZTCForm.controls;
   }
}

/**
 * Method Will be called on Add/update ZTC Config
 */
SaveZTCConfig(event: any){

 const target = event.defaultPrevented
 const uname = target.queryselector("#uname").value

console.log("User Name is ");
 alert("inside submitZTCConfig lock");

 if(isNaN(this.data.ID)){
    console.log("Going to Add ZTC Config Detail");
      this.AddZTCConfig();
      this.dialogRef.close();
  }else{
      console.log("Going to update ZTC Config Detail");
      this.updateZTCConfig();
      this.dialogRef.close();
  }

}

/**
 * Method is exposed to Add ztc Config detail in DB
 */
  AddZTCConfig(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.addZTCForm.invalid) {
      return;
    }
    let formObj = this.addZTCForm.getRawValue(); 
    delete formObj.mac;   // delete mac from json
    delete formObj.ID;   // delete ID from json
    let stbZTC = JSON.stringify(formObj);
    console.log('Add Button clicked: ' + stbZTC);

    this.mac = this.addZTCForm.value.mac
    console.log("MAC is ::: " + this.mac);

    console.log("Going to ADD Ztc Config in BEPZTC ::: ");
    this.ztcService.sendToBEPZTC(stbZTC,this.mac).subscribe( 
      data => {
        console.log("Record Added successfully !", data);        
        this.results = data as string;   
        this.ztcError = null;
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
    * Method exposed to updateZTC Config Value
    */
   updateZTCConfig(){

    // stop here if form is invalid
    if (this.addZTCForm.invalid) {
      return;
    }

    let formObj = this.addZTCForm.getRawValue(); 
    delete formObj.ID;   // delete ID from json  
    delete formObj.mac;   // delete mac from json  
    let stbZTC = JSON.stringify(formObj);

    console.log('stbZTC value is :: ' + stbZTC);

    this.mac = this.addZTCForm.value.mac    
    console.log("MAC is ::: " + this.mac);

    console.log("Update ZTC is going to call");

    this.ztcService.updateZTCConfig(this.mac,stbZTC).subscribe(
      data => {
        console.log("success!", data); 
        this.ztcError = null;
        this.results= null;
      },                      
    error => {        
      this.ztcError =  this.handleErrorObservable(error);
      console.error("Exception occured in BEPZTC is ::: ", this.ztcError) 
      this.results= null;
    });
    
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
