import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngContent';
  @ViewChild('par') par: ElementRef;

  public onContentChange() {
    this.par.nativeElement.textContent = 'Content Child Changed!!!';
  }

}
