import { Component, OnInit, Input } from '@angular/core';
import { IEmployees } from '../employees';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-landing',
  templateUrl: './employee-landing.component.html',
  styleUrls: ['./employee-landing.component.css']
})
export class EmployeeLandingComponent implements OnInit {
  pageTitle: string = 'Employees List';
  @Input() employee: IEmployees[];

  constructor(private service: EmployeeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  //   //  this.service.getEmployeelist().subscribe(
  //     employee => {
  //       this.employee = employee ;
  //    console.log(this.employee);
  // },
  //   err => console.log('Http error',err),
  //   () => console.log('http req completed'));
  }
  
  onHit(){
    this.service.getEmployeelist().subscribe(
      employee => {
           this.employee = employee ;
        console.log(this.employee);
     },
       err => console.log('Http error',err),
       () => console.log('http req completed'));
       this.router.navigate(['employees']);
  }
  onclick(){
    this.router.navigate(['register']);
  }
 
}

