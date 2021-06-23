import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddressComponent } from './employee-address/employee-address.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { EmployeePayscaleComponent } from './employee-payscale/employee-payscale.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeSkillsetComponent } from './employee-skillset/employee-skillset.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: "employee", component: EmployeeComponent, children:[
    {path: "address", component: EmployeeAddressComponent},
    {path: "contact", component: EmployeeContactComponent},
    {path: "designation", component: EmployeeDesignationComponent},
    {path: "payscale", component: EmployeePayscaleComponent},
    {path: "profile", component: EmployeeProfileComponent},
    {path: "skillset", component: EmployeeSkillsetComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
