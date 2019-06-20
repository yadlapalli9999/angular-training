import {Component} from '@angular/core';

@Component({
    selector:'ganesh-app',
    templateUrl:'./ganesh-component.html'
})

export class GaneshComponent{
    message = "Welcome to angular";
    person = {
        "fname": "Brooks",
        "lname": "Azcunaga",
        "tel": "(155)350-2565",
        "address": "9252 Ac Dr",
        "city": "Newburg",
        "state": "TX",
        "zip": 27876
    }
    getKeeys(Obj){
        console.log(Object.keys(Obj))
        return Object.keys(Obj)
    }
}