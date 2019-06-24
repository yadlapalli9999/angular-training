import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  communicate = new Subject()
  constructor() {
    console.log(this.communicate)
   }
  sendData(details){
   console.log(details)
   this.communicate.next(details)
  }
  
}
