import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  property:any ={
    "id":1,
    "type":"test",
    "price":50

  }

  constructor() { }

  ngOnInit(): void {
  }

}
