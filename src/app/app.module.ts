import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtCustomLibModule } from 'at-custom-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AtCustomLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
