import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) {
}
 GetAllProprties()
 {
  return this.http.get('data/property.json')
 }


}


