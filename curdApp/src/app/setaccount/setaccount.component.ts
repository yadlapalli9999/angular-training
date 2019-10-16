import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { CommonService } from '../common.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-setaccount',
  templateUrl: './setaccount.component.html',
  styleUrls: ['./setaccount.component.css']
})
export class SetaccountComponent implements OnInit {
  close = false
  editclose = false;
  myForm:FormGroup;
  user= {} as any
  userData;
  updateEditObj;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      username:new FormControl(''),
      password:new FormControl(''),
      company:new FormControl(''),
      country:new FormControl(''),
      timezone:new FormControl('')
    })
    // this.myForm = this.commonService.selectedUser;
    // console.log(this.user)
    //  if(this.user.id){
    //   this.myForm.setValue({
    //    user:this.user.value,
    //     name:this.user.value,
    //     email:this.user.value,
    //     username:this.user.value,
    //     password:this.user.value,
    //     company:this.user.value,
    //     country:this.user.value,
    //     timezone:this.user.value
    //   })
    //  }
    // this.updateEditObj.setValue({
    //   name:this.user.name,
    //   email:this.user.email,
    //   username:this.user.username,
    //   password:this.user.password,
    //   company:this.user.company,
    //   country:this.user.country,
    //   timezone:this.user.timezone
    // })
    
    this.displayTable()


  }
  add(){
   this.close = true
  }
  closeAddform(){
    this.close = false
  }
  adduser(){

    console.log(this.myForm.value)
    this.user = this.myForm.value
    this.commonService.addAccountInfo(this.user).subscribe((res)=>{
      console.log(res)
      this.displayTable()
      this.clearForm()
    })
    
  }
  displayTable(){
    this.commonService.getAccountInfo().subscribe((res)=>{
      this.userData = res;
    }) 
  }
  clearForm(){
    this.myForm.reset()
  }

  delete(obj){
    this.commonService.deleteAccount(obj).subscribe((res)=>{
      this.displayTable()
    })
  }
  edit(obj){
  //  this.updateEditObj = true
   this.updateEditObj = obj;
  //  this.updateEditObj.name = ''
  
   console.log(this.updateEditObj)
   this.editclose = true;
  }

  updateUser(edituser){
    this.commonService.updateAccountInfo(this.updateEditObj).subscribe((res)=>{
       //this.user = res
       this.displayTable()
   })
}
}