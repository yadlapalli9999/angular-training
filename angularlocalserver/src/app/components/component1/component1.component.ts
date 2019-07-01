import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
users;
  constructor(private commonService:CommonService, private ref:ChangeDetectorRef) { }

  ngOnInit() {
    this.display()
    this.commonService.sendInfo.subscribe((res)=>{
       this.display()
       this.ref.markForCheck()
    })
    
  }
  selectUser(obj){
    console.log(obj)
   this.commonService.sendData(obj)
  }
  adddata(myform){
    console.log(myform)
    this.commonService.addauthor(myform).subscribe((res)=>{
      console.log(res)
      this.display()
    })

  }

  display(){
    this.commonService.getdata().subscribe((res)=>{
      this.users = res
    })
  }
}
