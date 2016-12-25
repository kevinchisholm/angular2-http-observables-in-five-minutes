import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {PackagesComponent} from '../packages/packages.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {routing} from './routes';

@NgModule({
  providers: [
    BaseRequestOptions,
    HttpModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  imports: [BrowserModule, HttpModule, routing],
  declarations: [
    AppComponent,
    PackagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
