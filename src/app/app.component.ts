import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private router: Router){
    this.router.navigate(['/app-login']);
  }

  ngOnInit() {
   
    
  }
  title = 'Welcome to MyProject';
  newuser = 'New User';
}
