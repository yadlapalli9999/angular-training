import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-civi-crm',
  templateUrl: './civi-crm.component.html',
  styleUrls: ['./civi-crm.component.css']
})
export class CiviCRMComponent implements OnInit {
  myForm:FormGroup;
  user= {} as any
  allusers;
  editedobj;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.get()
    this.myForm = new FormGroup({
      radio:new FormControl('',[Validators.required]),
      using:new FormControl('',[Validators.required]),
      whichCMS:new FormControl('',[Validators.required]),
      skill:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      firstname:new FormControl('',[Validators.minLength(4)]),
      lastname:new FormControl('',[Validators.minLength(5)]),
      address:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      postalcode:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
    });
  }
  adduser(){
    console.log(this.myForm.value)
    this.user = this.myForm.value;
    this.commonService.addUser(this.user).subscribe((res)=>{
      console.log(res)
      this.get()
    })
    this.clearForm()
  }

  clearForm(){
    this.myForm.reset()
  }
  get(){
    this.commonService.getuser().subscribe((res)=>{
      this.allusers=res;
      console.log(this.allusers)
    })
  }
  edit(obj){
this.editedobj=obj;
console.log(this.editedobj)
  }
  delete(obj,i){
    this.commonService.deleteobj(obj).subscribe((res)=>{
      this.get();
    })
  }

}
