import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './LIst-component/my-new-component.component';
import { ListComponentComponent } from './my-component/List-component.component';
import { NavBarComponentComponent } from './NavBar-component/NavBar-component.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
