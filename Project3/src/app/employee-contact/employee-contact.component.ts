import { Component, OnInit } from '@angular/core';
import { EmpReg } from '../model/empReg';
import { CommonServiceService } from '../shared/common-service.service';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {

  regInfo : EmpReg[ ] = []
  constructor(private commonServicce : CommonServiceService) { }

  ngOnInit(): void {
  }

  getEmployeeReg() {
    this.commonServicce.getEmployeeReg().subscribe((result : EmpReg[])=>{
      this.regInfo = result;
    })
  }
}
