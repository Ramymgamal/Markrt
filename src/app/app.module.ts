import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './LIst-component/my-new-component.component';
import { ListComponentComponent } from './my-component/List-component.component';
import { NavBarComponentComponent } from './NavBar-component/NavBar-component.component';
import { HousingService } from './Service/Housing.service';
import { AddPropertyComponent } from './add-property/add-property.component';

const appRoutes: Routes = [
  { path: "add-property", component: AddPropertyComponent },
  { path: "", component: MyNewComponentComponent },
  //{ path: "contactus", component: ContactUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
      ListComponentComponent,
      NavBarComponentComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],


})
export class AppModule { }
