import { ListServiceService } from './list-service.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxRangeSliderModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { Order01Pipe } from './order01.pipe';
import { Devext01Component } from './devext01/devext01.component';
import { Foundation01Component } from './foundation01/foundation01.component';



@NgModule({
  declarations: [
    AppComponent,
    Test01Component,
    Test02Component,
    Order01Pipe,
    Devext01Component,
    Foundation01Component
  ],
  imports: [BrowserModule, DxRangeSliderModule],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
