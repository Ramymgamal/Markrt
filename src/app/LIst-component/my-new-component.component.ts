
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../Service/Housing.service';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

//declartion array of any
  properties:any;

  constructor(private housing:HousingService) {

   }

  ngOnInit(): void {
    this.housing.GetAllProprties().subscribe
    (data=>{
      this.properties=data;
      console.log(data);


    });

  }

}
