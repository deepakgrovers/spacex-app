import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'launch-by-spacex';
  launches;
  data = {
    'selectYear' : null,
    'launchType' : null,
    'successType' : null
  };
  constructor(private apiService: ApiService, 
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.SpinnerService.show();  
    this.apiService.getData().subscribe((data)=>{
      this.SpinnerService.hide();        
      this.launches = data;
    });
  }
   
  getYear(year){  
    this.SpinnerService.show();  
    if(this.data && this.data.selectYear === year) {
      this.data.selectYear = null;
    }
    else{
      this.data.selectYear = year;
    }

    this.apiService.getData(this.data).subscribe((d)=>{
      this.launches = d;
      this.SpinnerService.hide();  
    });  
  }   
  
  getLaunch(launch) {
    this.SpinnerService.show();  
    if(this.data && this.data.launchType === launch) {
      this.data.launchType = null;
    }
    else{
      this.data.launchType = launch;
    }
    this.apiService.getData(this.data).subscribe((d)=>{
      this.SpinnerService.hide();        
      this.launches = d;
    }); 
  }

  getLand(land) {
    this.SpinnerService.show();  
    if(this.data && this.data.successType === land) {
      this.data.successType = null;
    }
    else{
      this.data.successType = land;
    }
    this.apiService.getData(this.data).subscribe((d)=>{
      this.SpinnerService.hide();        
      this.launches = d;
    }); 
  } 
}
