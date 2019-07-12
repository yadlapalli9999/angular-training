import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private _http:HttpClient) { }

  addStudentDetails(obj){
    let headers = {
      "Content-type":"application/json"
    }
    return this._http.post('http://localhost:3000/students',obj,{headers:headers})
    
  }

  getStudentList(){
    return this._http.get('http://localhost:3000/students')
  }

  deleteStudent(obj){
    let headers = {
      "Content-type":"application/json"
    }
     return this._http.delete('http://localhost:3000/students/'+obj.id,{headers:headers})
  }
}
