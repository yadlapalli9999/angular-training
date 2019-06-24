import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
user;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.communicate.subscribe((res)=>{
      this.user = res;
      console.log(res)
    })
  }

}
