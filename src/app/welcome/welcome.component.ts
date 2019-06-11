import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private route : Router) { }

  ngOnInit() {

    const username = this.storage.get("username");
    console.log("user name is ::::: " + username);
    
  }

  title = 'app';
  username:string = this.storage.get("username");
  
  
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

/**
 * Method is exposed to clear session and logout from appliaction
 */
  logout(){
    console.log("logout method is called ::::::::::: ");
    this.storage.remove("username")
    this.route.navigate(['/app-login'])
  }

}
