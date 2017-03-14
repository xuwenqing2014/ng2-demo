import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ChildComponent }  from './child.component';
import { PersonService } from './service/info.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PersonService]
})
export class AppModule { }
