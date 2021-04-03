import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

  constructor(private http: HttpClient) { }

  getCountry(path:any) {
    return this.http.get(path);
  }

  getCountryFlag(path:any,countryName:String) {
    return this.http.post(path,countryName);
  }

  getStates(path:any,countryName:String) {
    return this.http.post(path,countryName);
  }

}
