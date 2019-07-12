import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'student', component:StudentinfoComponent},
  {path:'student/addstudent', component:AddstudentComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
