import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
// import { Router } from '@angular/router';
// import { PushNotificationsModule } from 'ng-push'; //import the module

@NgModule({
  declarations: [
    AppComponent,
    PermissionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Router
    // PushNotificationsModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
