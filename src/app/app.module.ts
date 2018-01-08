import { CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './components/app.routing/app.routing.component';
 

import { CanActivateService } from './services/canActivate.service';
import { NotificationComponent } from './components/notification/notification.component';
import { NotifService } from './services/notif-service.service';
import { LoginService } from './services/login-service.service';
import { CarService } from './services/car-service.service';

import { DataTablesModule } from 'angular-datatables';
import { BusyModule, BusyConfig} from 'angular2-busy';

import { LoginComponent   } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { Newcar } from './components/newcar/newcar.component';
import { AppComponent } from './components/shared/app.component';
import { UpdateCarComponent } from './components/updatecar/update.component';

import { PageNotFoundComponent } from './components/pageNotFound/PageNotFound.component';
import { PesonComponent } from './components/peson/peson.component';
import { PersonService } from './services/person.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
export function getBusyConfig() {
  return  new BusyConfig({
    message: 'Please wait ...',
    backdrop: false,
    delay: 300,
    minDuration: 800,
    wrapperClass: 'ng-busy'
  });
} 
@NgModule({
  declarations: [
    AppComponent, 
    ListComponent, 
    Newcar, 
    LoginComponent,
    UpdateCarComponent,
    NotificationComponent,
    PageNotFoundComponent,
    PesonComponent
  ],
  imports: [
 
    BrowserModule, 
    //BusyModule.forRoot(getBusyConfig()),
    FormsModule,
    ReactiveFormsModule, 
    HttpModule, 
    routing,
    DataTablesModule ,
    BrowserAnimationsModule
  ],
 
  providers: [CarService, CanActivateService, NotifService, LoginService,PersonService ],
  bootstrap: [AppComponent, NotificationComponent]
})
export class AppModule { }