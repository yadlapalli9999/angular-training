import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentinfoComponent,
    PagenotfoundComponent,
    AddstudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
