import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './LIst-component/my-new-component.component';
import { ListComponentComponent } from './my-component/List-component.component';
import { NavBarComponentComponent } from './NavBar-component/NavBar-component.component';
import { HousingService } from './Service/Housing.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
      ListComponentComponent,
      NavBarComponentComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],


})
export class AppModule { }
