import { Component, OnInit } from '@angular/core';
import { ZtcConfigServiceService } from '../ztc-config-service.service';

@Component({
  selector: 'app-getztcdetail',
  templateUrl: './getztcdetail.component.html',
  styleUrls: ['./getztcdetail.component.css']
})
export class GetztcdetailComponent implements OnInit {

  records: any[];
  
  //initializing p to one
  p: number = 1;

  constructor(private mysevice : ZtcConfigServiceService) {
   
   }

  ngOnInit() {
    this.records = this.mysevice.getData();
    console.log(" response is :::::: " + this.records);
  }

  //sorting
  key: string = 'BEPID'; //set default
  reverse: boolean = false;

  sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 }

}
