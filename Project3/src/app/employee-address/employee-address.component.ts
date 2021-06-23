import { Component, OnInit } from '@angular/core';
import { EmployeeInfo } from '../model/employeeInfo';
import { CommonServiceService } from '../shared/common-service.service';

@Component({
  selector: 'app-employee-address',
  templateUrl: './employee-address.component.html',
  styleUrls: ['./employee-address.component.css']
})
export class EmployeeAddressComponent implements OnInit {

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
