import { Component, Input, OnInit } from '@angular/core';
import { user } from '../api-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  @Input() users: user[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
