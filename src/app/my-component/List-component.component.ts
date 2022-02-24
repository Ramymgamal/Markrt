import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-List-component',
  templateUrl: './List-component.component.html',
  styleUrls: ['./List-component.component.css']
})
export class ListComponentComponent  {
@Input() proprety:any

}
