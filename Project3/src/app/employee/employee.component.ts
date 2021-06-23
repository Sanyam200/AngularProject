import { Component, OnInit } from '@angular/core';
import { EmployeeInfo } from '../model/employeeInfo';
import { CommonServiceService } from '../shared/common-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empInfo : EmployeeInfo[] = [];
  
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    
    }
 
  getEmployeeInfo() {
    this.commonService.getEmployeeInfo().subscribe((result:EmployeeInfo[])=>{
      this.empInfo = result;
    })
  }

}