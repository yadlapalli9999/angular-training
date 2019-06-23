import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'nani-compon',
    templateUrl:"./nani.component.html"
})
export class NaniComponent{
 @Input() recive;
 @Input() obj;
 @Input() arr;
@Output() updateObj = new EventEmitter()
 ngOnInit(){
     //console.log(this.arr)
     console.log(this.obj)
 }
 editUser(obj){
  console.log(obj)
  this.updateObj.emit(obj)
 }
}