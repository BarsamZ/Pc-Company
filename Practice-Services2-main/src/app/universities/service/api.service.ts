import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


export interface  University {
  name: string
  age: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getsearchuniversiti(): Observable<University[]> {
        
    return this.http.get<any>('http://universities.hipolabs.com/search');
  }
}
   
    
