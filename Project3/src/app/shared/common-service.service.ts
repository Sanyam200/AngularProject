import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInfo } from '../model/employeeInfo';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _http: HttpClient) { }

  getEmployeeInfo(): Observable<EmployeeInfo[]> {
    return this._http.get<EmployeeInfo[]>("http://localhost:3000/employeeInfo");
  }
}
