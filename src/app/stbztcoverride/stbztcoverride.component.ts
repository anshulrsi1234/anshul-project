import { Component, OnInit } from '@angular/core';
import { ZtcConfigServiceService } from '../ztc-config-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-stbztcoverride',
  templateUrl: './stbztcoverride.component.html',
  styleUrls: ['./stbztcoverride.component.css']
})
export class StbztcoverrideComponent implements OnInit {

  addOverrideForm: FormGroup;
  submitted: boolean =  false;
  overrideResults: string;
  ztcError: string
  deleteSucsess:string
  delete:boolean =false;

  constructor(private ztcService : ZtcConfigServiceService, private formbuilder:FormBuilder) { 

  }

  ngOnInit() {
      this.addOverrideForm = this.formbuilder.group({
        MAC: ['',Validators.required],
        bepSiteName:['',Validators.required]
      });
  }

  get f(){
    return this.addOverrideForm.controls;
  }

/**
    Method exposed to SAVE data into DB.
 */
  SaveZTCOverridedetail(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.addOverrideForm.invalid) {
      return;
    }

    let formObj = this.addOverrideForm.getRawValue(); 
    let stbZTC = JSON.stringify(formObj);
    console.log('Json is Button clicked:::: ' + stbZTC);
    console.log("Going to ADD Override detail in BEPZTC ::: ");

    this.ztcService.SaveZTCOverridedetail(stbZTC).subscribe( 
      data => {            
        this.overrideResults = stbZTC; 
        this.deleteSucsess=null
        console.log("Record Added successfully !", this.overrideResults);     
        this.ztcError = null;
      },           
      error => {        
        this.ztcError =  this.handleErrorObservable(error);
        console.error("Exception occured in STB override entry is ::: ", this.ztcError) 
        this.overrideResults= null;
        this.deleteSucsess=null
      }             
    );

  }

/**
  Method exposed to delete the STB ZTC override entry

 */
  removeSTBZtcOverride(){

    this.delete = true;
    console.log("::: deleteZTCConfig ::: ");
    var confirm = window.confirm("Are u sure to delete the record");
    alert(" >>>> confirm <<<<<<< " + confirm);
    if(confirm){

      let formObj = this.addOverrideForm.getRawValue(); 
      let stbZTC = JSON.stringify(formObj);
      console.log('Json is Button clicked:::: ' + stbZTC);

      return this.ztcService.removeSTBZtcOverride(stbZTC).subscribe(
        response => {                
          this.overrideResults = null; 
          this.ztcError= null;          
          this.deleteSucsess = "Record successfully deleted::::";  
          return false;    
        },
        error => {      
          alert("inside error alert");
          this.ztcError =  this.handleErrorObservable(error);
          console.error("Exception occured in BEPZTC is ::: ", this.ztcError) 
          this.overrideResults = null; 
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
    * Method is exposed to to reurn BEPZTC error object
    * @param error 
  */
   private handleErrorObservable (error: HttpErrorResponse) {
    const descriptionMessage = error.error;
    return descriptionMessage;    
  }
  
}
