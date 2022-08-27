import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { IUniversityListItem } from '../model/universities.models';

@Component({
  selector: 'app-universitilist',
  templateUrl: './universitilist.component.html',
  styleUrls: ['./universitilist.component.css'],
})
export class UniversitilistComponent implements OnInit {
  universitiListItems: IUniversityListItem[];
  isSpecial: any;
  isUnchanged: any;
  canSave: any;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getsearchuniversiti('Canada').subscribe((Result) => {
      this.universitiListItems = Result;
      console.log(Result);
    });
  }

  country(countryname:string): void  {
  
    this.service.getsearchuniversiti(countryname).subscribe((Result) => {
      this.universitiListItems = Result;
      console.log(Result);
    });
  
  
  }  

}
