import { Component } from '@angular/core';
import { user } from './api-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project';
  users: user[] = [];

  

 public userAdded(users: user[]){
    this.users = users;
 }

}
