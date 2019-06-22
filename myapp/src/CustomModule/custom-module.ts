import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomComponent } from './custom-component';
import { GaneshComponent } from './ganesh-component';
import { NaniComponent } from './nani-component';

@NgModule({
    declarations:[CustomComponent,GaneshComponent,NaniComponent],
    imports:[BrowserModule],
    providers:[],
    bootstrap:[CustomComponent]
})

export class CustomModule{}