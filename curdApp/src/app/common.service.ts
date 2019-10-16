import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
//User details apis
  userContact(obj){
    let headers = {
      "Content-type":"application/json"
    }
    return this._http.post('http://localhost:3000/contactObj',obj,{headers:headers})
  }

  getContact(){
    return this._http.get('http://localhost:3000/contactObj')
  }

  deleteContact(obj) {
    return this._http.delete('http://localhost:3000/contactObj/' + obj.id, obj)
  }

  UpdateUser(obj) {
    return this._http.put('http://localhost:3000/contactObj/' + obj.id, obj)
  }
// Account details apis
selectedUser = {} as any;
  addAccountInfo(obj){
    return this._http.post('http://localhost:3000/accountObj',obj)
  }

  getAccountInfo(){
    return this._http.get('http://localhost:3000/accountObj')
  }

  deleteAccount(obj){
    return this._http.delete('http://localhost:3000/accountObj/' + obj.id, obj)
  }

updateAccountInfo(obj) {
    return this._http.put('http://localhost:3000/accountObj/' + obj.id, obj)
  }

  //crm application
  addUser(obj){
    return this._http.post('http://localhost:3000/cms',obj)
      }
      getuser(){
        return this._http.get('http://localhost:3000/cms')
      }
      update(obj1){
        return this._http.put('http://localhost:3000/cms/'+obj1.id,obj1)
      }
      deleteobj(obj2){
        return this._http.delete('http://localhost:3000/cms/'+obj2.id,obj2)
      }

}
