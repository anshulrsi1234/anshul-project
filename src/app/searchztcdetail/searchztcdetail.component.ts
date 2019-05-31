import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZtcConfigServiceService } from '../ztc-config-service.service';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-searchztcdetail',
  templateUrl: './searchztcdetail.component.html',
  styleUrls: ['./searchztcdetail.component.css']
})
export class SearchztcdetailComponent implements OnInit {

  searchform: FormGroup;
  submit: boolean =false;
  results : string;
  mac:String
  ztcError:string;
  deleteSucsess:string;


  constructor(private router : Router,private formBuilder: FormBuilder, private  myservice :ZtcConfigServiceService) {

   }

  ngOnInit() {
    this.searchform = this.formBuilder.group({
      mac: ['', Validators.required]
    });
  }

  get f(){
    // convenience getter for easy access to form fields
   { 
     return this.searchform.controls;
   }
 }

 /**
  * Method is exposed to search mac specific configuration
  */
  getZTCDetail(event: any){
    
 console.log("::::: Inside getZTCDetails :::: ");

    this.submit=true;

    if(this.searchform.invalid){
         console.log("Invalid field error");
       return
    }
    
    this.mac = this.searchform.value.mac;
  
        
    this.myservice.searchZTCConfigByMac(this.mac).subscribe(
      data => {      
        this.results = data as string;
        console.log("success!", this.results);
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

    deleteZTCConfig(mac:string) {

      console.log("::: deleteZTCConfig ::: ");

      var confirm = window.confirm("Are u sure to delete the record");
      alert(" >>>> confirm <<<<<<< " + confirm);
      if(confirm){
        return this.myservice.deleteZTCConfig(mac).subscribe(
          response => {
            alert("inside response alert" + response);        
            this.results = null; 
            this.ztcError= null;          
            this.deleteSucsess = "Record successfully deleted::::";  
            return false;          
          },
          error => {      
            alert("inside error alert");
            this.ztcError =  this.handleErrorObservable(error);
            console.error("Exception occured in BEPZTC is ::: ", this.ztcError) 
            this.results= null;
            this.deleteSucsess =null;
            return false;   
          }               
        );
      }else{
        alert("inside else block");
        return false;
      }      
   
    }

  /**
    * Method is exposed to to reurn BEPZTC Status Code
    * @param error 
   */
   private fetchSucessStatus(response : Response) {
    const status = response.status;
    alert("status!" + status);
    return status;    
  }
  
  }

