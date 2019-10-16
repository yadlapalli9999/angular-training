import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'

declare var $: any;
// @import '../../assets/js/contactValidation.js';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  user = {} as any;
  listData;
  editObj;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.DisplayTable()
    // this.commonService.getContact().subscribe((res)=>{
    //      this.listData = res
    //  })
  }
  contact(){
   this.commonService.userContact(this.user).subscribe((res)=>{
    //  this.user = res
    console.log(res)
    this.DisplayTable()
   })
  }

  DisplayTable(){
    this.commonService.getContact().subscribe((res)=>{
      this.listData = res
    })
  }
  
  deletes(obj) {
      
    this.commonService.deleteContact(obj).subscribe((res) => {
      console.log(res)
       this.DisplayTable()
    })
  }

  edits(obj){
    // this.commonService.UpdateUser(this.user).subscribe((res)=>{
    //     //this.user = res
    //     this.DisplayTable()
    // })
    console.log(obj)
    this.user = obj
    // this.contact();
    // this.DisplayTable();
  }
  editUser(){
     this.commonService.UpdateUser(this.user).subscribe((res)=>{
        //this.user = res
        this.DisplayTable()
    })
  }
}
