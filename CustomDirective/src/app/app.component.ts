import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  color = 'red';
  images: string[] = ['/assets/1.jpg','/assets/2.jpg','/assets/3.jpg'];
}
