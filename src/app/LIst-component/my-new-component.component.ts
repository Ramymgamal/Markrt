import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

//declartion array of any
  properties:any;

  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
    this.http.get('data/property.json').subscribe
    (data=>{
      this.properties=data;
      console.log(data);


    });

  }

}
