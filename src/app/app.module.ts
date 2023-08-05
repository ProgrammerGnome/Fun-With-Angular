import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import {MyComponent} from "./horizontal-collapse/horizontal-collapse.component";
@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule,
    MyComponent,
    RouterModule.forRoot([
      {path: 'firstPage', component: FirstCompComponent},
      {path: 'secondPage', component: SecondCompComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
