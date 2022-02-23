import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { ListComponentComponent } from './List-component/List-component.component';
import { NavBarComponentComponent } from './NavBar-component/NavBar-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [		
    AppComponent,
    MyNewComponentComponent,
      ListComponentComponent,
      NavBarComponentComponent
   ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
