import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    public title: string = "default";

    constructor(private http: HttpClient) { }

    public log(message: string) {
        
        console.log(message);
    }

    
    public getMiddleUniversity() {
        
        this.http.get<any>('http://universities.hipolabs.com/search?name=middle').subscribe(data => {
            console.log(data);
        })

        
    }
}