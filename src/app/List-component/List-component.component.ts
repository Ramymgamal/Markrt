import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-List-component',
  templateUrl: './List-component.component.html',
  styleUrls: ['./List-component.component.css']
})
export class ListComponentComponent  {

  property : any={
    "id":1,
    "name" : "زجاجة",
    "price" : 50
  }

}
