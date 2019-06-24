import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
users;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.users = data;
    console.log(this.commonService)

  }
  selectUser(obj){
     console.log(obj)
    this.commonService.sendData(obj)
  }

}

var data = [
  {
      "fname": "Carolin",
      "lname": "Marks",
      "tel": "(992)441-8909",
      "address": "8681 Dolor Dr",
      "city": "Prattville",
      "state": "MA",
      "zip": 28630
  },
  {
      "fname": "Sandro",
      "lname": "Lyn",
      "tel": "(249)567-7764",
      "address": "7348 Neque Rd",
      "city": "Killeen",
      "state": "KS",
      "zip": 24668
  },
  {
      "fname": "Zandra",
      "lname": "Filleul",
      "tel": "(353)992-5302",
      "address": "9563 Pharetra Dr",
      "city": "Rawlins",
      "state": "OK",
      "zip": 51133
  },
  {
      "fname": "Dave",
      "lname": "Karma",
      "tel": "(517)122-4186",
      "address": "7379 Massa Ct",
      "city": "Wichita",
      "state": "NC",
      "zip": 26714
  },
  {
      "fname": "Hiam",
      "lname": "Mcgrath",
      "tel": "(365)829-0347",
      "address": "6759 Nullam St",
      "city": "Coeur D'alene",
      "state": "NY",
      "zip": 78681
  },
  {
      "fname": "Culveretta",
      "lname": "Reyach",
      "tel": "(763)775-3117",
      "address": "6935 Pharetra Ct",
      "city": "Zionsville",
      "state": "WI",
      "zip": 21764
  },
  {
      "fname": "Peggy",
      "lname": "Glover",
      "tel": "(796)778-6713",
      "address": "5617 Aenean St",
      "city": "Piedmont",
      "state": "TX",
      "zip": 54339
  },
  {
      "fname": "Biswajit",
      "lname": "Rainwater",
      "tel": "(931)306-6117",
      "address": "6844 Sagittis St",
      "city": "Clayton",
      "state": "HI",
      "zip": 94524
  },
  {
      "fname": "Sucharitha",
      "lname": "Vyater",
      "tel": "(452)171-9290",
      "address": "2091 Placerat Ave",
      "city": "Roseville",
      "state": "AL",
      "zip": 55431
  },
  {
      "fname": "Ted",
      "lname": "Johnston",
      "tel": "(798)849-3195",
      "address": "3624 Dolor St",
      "city": "Augusta",
      "state": "SC",
      "zip": 74150
  }
]