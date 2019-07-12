import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users;
  title = 'assignmentroute';
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.commonService.getData().subscribe((res)=>{
      console.log(res)
      this.users = res;
    })
  }

}
