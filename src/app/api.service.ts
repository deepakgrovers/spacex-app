import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  launchData = [];
  constructor(private httpClient: HttpClient) { 
  }
  public getData(data = undefined){
     console.log(data)
      let filters =  (data !== undefined ? `${
      (data.successType != null ? '&land_success='+data.successType : '') + 
      (data.launchType != null ? '&launch_success='+data.launchType : '') + 
      (data.selectYear != null ? '&launch_year='+data.selectYear : '' )}` : ''
    )
      let url = this.apiUrl + filters;
      console.log(url)            
    return this.httpClient.get(this.apiUrl + filters);
  }
}