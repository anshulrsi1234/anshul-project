import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { STBZTC } from './AppData';
import { mcall } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ZtcConfigServiceService {
 
  url:string;
  searchURL: string;
  deleteURL: string;

  constructor(private http: HttpClient) {

  }

  sendToBEPZTC(stbztcC,mac) {

    this.url = 'api/bep-ztc/v1.0/mac/';
    
    let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json','X-Correlation-Id': '12345',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true'
  }); 

    let options = {
      headers: httpHeaders
    };      
    this.url =this.url+mac;  
    return this.http.post(this.url, stbztcC, options); 
      
  }
/**
 * This method is exposed to get STB details
 */
  getBEPZTCConfig(){

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Correlation-Id': '12345'}); 

    let options = {
      headers: httpHeaders
    };        
    
    return this.http.get(this.url,options);
     
  }

    private extractData(res: Response) {
      let body = res.json();
        return body || {};
    }
    
    
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    private handleErrorPromise (error: Response | any) {
      console.error(error.message || error);
      return Promise.reject(error.message || error);
    }


    getData(){
       return [
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN1", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "11" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN2", "serialNumber": "1212", "TVSSID": "201515", "BEPID": "12" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN3", "serialNumber": "1213", "TVSSID": "201515", "BEPID": "13" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN4", "serialNumber": "1214", "TVSSID": "201515", "BEPID": "14" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN5", "serialNumber": "1215", "TVSSID": "201515", "BEPID": "15" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN6", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "16" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN7", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "17" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN8", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "18" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN9", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "19" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN10", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "20" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN11", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "21" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN12", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "22" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN13", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "23" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN14", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "24" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN15", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "25" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN16", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "26" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN17", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "27" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN18", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "28" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN19", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "29" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN20", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "30" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN21", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "31" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN21", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "32" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN22", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "33" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN23", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "34" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN24", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "35" },
        { "hardwareVersion": "IPTV.TECHNICOLOR.UIW4020PXN25", "serialNumber": "1211", "TVSSID": "201515", "BEPID": "36" }	
      ]
    }

    /**
     * Method exposed to get ZTC Config detail
     * @param mac 
     * 
     */
    searchZTCConfigByMac(mac){

      this.searchURL = 'api/bep-ztc/v1.0/mac/';

      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'X-Correlation-Id': '12345'}); 
  
      let options = {
        headers: httpHeaders
      };  

      const searchURL = this.searchURL+mac;  
      console.log(" >>> Get Search By MAC URL ::::  <<<< " + searchURL);
      
      return this.http.get(searchURL,options);
    }

    /**
     * Method is exposed to delete ZTC config detail based on MAC
     * @param mac 
     */
    deleteZTCConfig(mac:string) : Observable<Object> {

      this.deleteURL = 'api/bep-ztc/v1.0/mac-repair/';

      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'X-Correlation-Id': '12345'}); 
  
      let options = {
        headers: httpHeaders
      };  

      const deleteURL = this.deleteURL+mac; 

      console.log(" >>> delete ZTC config By MAC URL ::::  <<<< " + deleteURL);  


      return this.http.delete(deleteURL,options);
    }

    /**
     * Method exposed to update the STBZTC Config
     * @param mac 
     * @param stbztc 
     */
    updateZTCConfig(mac:string,stbztc) {

      this.url = 'api/bep-ztc/v1.0/mac/';
    
      let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json','X-Correlation-Id': '12345',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    }); 
  
      let options = {
        headers: httpHeaders
      };      
      this.url =this.url+mac;  
      console.log("URL For UpdateZTCConfig call is  ::: "+ this.url);
      return this.http.put(this.url, stbztc, options);
      
    }


}
