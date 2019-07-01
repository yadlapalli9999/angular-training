import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';



@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  user;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
this.commonService.communicate.subscribe((res)=>{
  this.user=res;
  console.log(res)
})
  }
  updateUser(obj){
    //console.log(obj)
    this.commonService.updateAuthor(obj).subscribe((res)=>{
        this.commonService.infoComp1();
    })
  }

}
