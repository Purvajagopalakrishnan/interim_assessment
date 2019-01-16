import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployees } from './employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = ("https://localhost:44396/api")
 

  constructor(private http: HttpClient) { }
  getEmployeelist(): Observable<IEmployees[]> {
   return this.http.get<IEmployees[]>(this.employeeUrl);

}

}