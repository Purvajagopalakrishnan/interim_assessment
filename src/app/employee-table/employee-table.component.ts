import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployees } from '../employees';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  @Input() employee: IEmployees[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  this.service.getEmployeelist().subscribe(
   employee => {
     this.employee = employee ;
      console.log(this.employee);
    },
      err => console.log('Http error',err),
      () => console.log('http req completed'));
    
  }


}
