import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactformComponent } from './contactform/contactform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SetaccountComponent } from './setaccount/setaccount.component';
import { CiviCRMComponent } from './civi-crm/civi-crm.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    SetaccountComponent,
    CiviCRMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
