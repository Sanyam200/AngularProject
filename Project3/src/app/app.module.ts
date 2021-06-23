import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddressComponent } from './employee-address/employee-address.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeePayscaleComponent } from './employee-payscale/employee-payscale.component';
import { EmployeeSkillsetComponent } from './employee-skillset/employee-skillset.component';
import { EmployeeDesignationComponent } from './employee-designation/employee-designation.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeAddressComponent,
    EmployeeProfileComponent,
    EmployeeContactComponent,
    EmployeePayscaleComponent,
    EmployeeSkillsetComponent,
    EmployeeDesignationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
