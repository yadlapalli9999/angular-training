import {Component} from '@angular/core';

@Component({
    selector:'ganesh-app',
    templateUrl:'./ganesh-component.html'
})

export class GaneshComponent{
    users
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
    helloworld(){
        return "Hello world"
    }
    ngOnInit(){
        this.users = data;
        //console.log(this.users)
    }
    showData(){
        this.users = data;
    }
    msg = "I am from ganesh component"
}

var data = [
    {
        "fname": "Sherrell",
        "lname": "Boyle",
        "tel": "(779)172-1768",
        "address": "9101 Massa Ln",
        "city": "Glendale",
        "state": "KS",
        "zip": 46342
    },
    {
        "fname": "Nadirah",
        "lname": "Burgin",
        "tel": "(483)808-0148",
        "address": "342 Ac St",
        "city": "Douglasville",
        "state": "FL",
        "zip": 12396
    },
    {
        "fname": "Constance",
        "lname": "Chew",
        "tel": "(775)106-4059",
        "address": "1279 Amet Dr",
        "city": "Texas City",
        "state": "CT",
        "zip": 80476
    },
    {
        "fname": "Mark",
        "lname": "Johnson",
        "tel": "(892)399-2112",
        "address": "2147 Tincidunt Rd",
        "city": "Kalamazoo",
        "state": "OR",
        "zip": 99145
    },
    {
        "fname": "Rania",
        "lname": "Lee",
        "tel": "(182)037-7973",
        "address": "3522 Lorem Rd",
        "city": "Maricopa",
        "state": "NE",
        "zip": 60986
    },
    {
        "fname": "Esmeralda",
        "lname": "Brennan",
        "tel": "(106)907-8736",
        "address": "6231 Non Dr",
        "city": "Centereach",
        "state": "NH",
        "zip": 47965
    },
    {
        "fname": "Karintha",
        "lname": "Van",
        "tel": "(122)567-0840",
        "address": "5962 Adipiscing Rd",
        "city": "Virginia Beach",
        "state": "CT",
        "zip": 77270
    },
    {
        "fname": "Maly",
        "lname": "Jordan",
        "tel": "(703)487-6221",
        "address": "8044 At Ave",
        "city": "Eagle Pass",
        "state": "VT",
        "zip": 58593
    },
    {
        "fname": "Shaneka",
        "lname": "Yarber",
        "tel": "(747)153-5656",
        "address": "4384 Ipsum St",
        "city": "Rockville",
        "state": "NJ",
        "zip": 82341
    },
    {
        "fname": "Polina",
        "lname": "Langfeldt",
        "tel": "(337)881-4136",
        "address": "7441 Nunc Ln",
        "city": "Pacific Palisades",
        "state": "AR",
        "zip": 49385
    }
]