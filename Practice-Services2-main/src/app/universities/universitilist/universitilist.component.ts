import { Component, OnInit } from '@angular/core';
import { ApiService , University } from '../service/api.service';


@Component({
  selector: 'app-universitilist',
  templateUrl: './universitilist.component.html',
  styleUrls: ['./universitilist.component.css']
})
export class UniversitilistComponent implements OnInit {


  universitiListItems: University []

  constructor(private service:ApiService ) { }

  ngOnInit(): void {
    this.service.getsearchuniversiti().subscribe(Result=>{
      this.universitiListItems=Result
      console.log(Result)
    })
  }

}
