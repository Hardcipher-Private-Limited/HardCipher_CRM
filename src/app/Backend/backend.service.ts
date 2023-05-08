import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  urlbase="https://backend.dashback.in/";

  constructor(private http: HttpClient) { 
    
  }
  searchMobile(data1:any, data2:any){
    return this.http.get(this.urlbase + `searchMob/${data1}/${data2}`);
  }
}
