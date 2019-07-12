import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';


@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(private stduentService:StudentserviceService) { }
   studentList;
  @Input() editStudentObj;

   displayStudentsList(){
    this.stduentService.getStudentList().subscribe((res)=>{
      this.studentList = res
      console.log(this.studentList)
    })
  }

  ngOnInit() {
    this.displayStudentsList()
  }
  

  editStudent(obj1){
    this.editStudentObj = obj1
    console.log(this.editStudentObj)

  }

  delete(obj1){
    this.stduentService.deleteStudent(obj1).subscribe((res)=>{
      console.log(res)
      this.displayStudentsList()
    })
  }

  
}
