import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  title = 'app';
  
  addZTCView: boolean = false;
  getZTCView: boolean = false;
  searchZTCView: boolean = false;
  updateZTCView: boolean = false;
  deleteZTCView: boolean = false;
 


  AddZTCConfigView(){
    console.log('AddZTCConfigView method is called :::::::::::');

    this.addZTCView = true;
    this.getZTCView = false;
    this.searchZTCView = false;
    this.updateZTCView =false;
    this.deleteZTCView =false;
  }

  getZTCConfigView(){
    console.log("getZTCConfigView method is called ::::::::::: ");
    
    this.addZTCView = false;
    this.getZTCView = true;
    this.searchZTCView = false;
    this.updateZTCView =false;
    this.deleteZTCView =false;
  }

  searchZTCConfigView(){
    console.log("searchZTCConfigView method is called ::::::::::: ");
    this.addZTCView = false;
    this.getZTCView = false;
    this.searchZTCView = true;
    this.updateZTCView =false;
    this.deleteZTCView =false;
  }

  updateMACRepairConfigView(){
    console.log("updateMACRepairConfigView method is called ::::::::::: ");
    this.addZTCView = false;
    this.getZTCView = false;
    this.searchZTCView = false;
    this.updateZTCView =true;
    this.deleteZTCView =false;
  }

  deleteZTCConfigView(){
    console.log("deleteZTCConfigView method is called ::::::::::: ");
    this.addZTCView = false;
    this.getZTCView = false;
    this.searchZTCView = false;
    this.updateZTCView =false;
    this.deleteZTCView =true;
  }

}
