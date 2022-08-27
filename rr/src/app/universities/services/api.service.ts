import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiPath ='http://universities.hipolabs.com';
 
  constructor(private http: HttpClient) {}

  public getsearchuniversiti(country): Observable<any> {
    return this.http.get<any>('http://universities.hipolabs.com/search?country=' + country);
  }

  
}
