import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IEmployees } from '../employees';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.css']
})
export class RegisterTableComponent implements OnInit {
  newForm: FormGroup;
  emp: IEmployees;

  constructor(public formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private service: EmployeeService) { }

  ngOnInit() {
    this.newForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      DOB: ['', Validators.required],
      Gender: ['',Validators.required],
      Email: ['',Validators.required],
      Experience: ['',Validators.required],
      Designation:[],
      Emp_Type: ['',Validators.required]
  });
}
  onSubmit():void {
    if (this.newForm.invalid) {
        return;
    }
    console.log(this.newForm.value);
    this.router.navigate(['employeedetails']);
  }
}