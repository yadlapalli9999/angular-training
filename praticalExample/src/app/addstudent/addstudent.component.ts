import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentsInfo = {id:'',fname:'',lname:'',email:''}
  constructor(private stduentService:StudentserviceService) { }
  studentReceviedInfo;
  ngOnInit() {
  }
  addStudent(){
    this.stduentService.addStudentDetails(this.studentsInfo).subscribe((res)=>{
      console.log(res)
    })
  }
  recievedData(obj){
    this.studentReceviedInfo = obj;
    console.log(this.studentReceviedInfo)
  }
}
