import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';
import { SetaccountComponent } from './setaccount/setaccount.component'
import { CiviCRMComponent } from './civi-crm/civi-crm.component';

const routes: Routes = [
  {path:'contact', component:ContactformComponent},
  {path:'account', component:SetaccountComponent},
  {path:'crmform', component:CiviCRMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
