import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondClass } from './second-file';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SecondClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
