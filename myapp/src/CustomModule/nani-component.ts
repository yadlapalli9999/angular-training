import {Component, Input} from '@angular/core';

@Component({
    selector:'nani-compon',
    template:"{{recive}}"
})
export class NaniComponent{
 @Input() recive;
 @Input() obj;
 @Input() arr;
 ngOnInit(){
     console.log(this.arr)
 }
}