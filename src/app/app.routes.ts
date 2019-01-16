import { Routes } from "@angular/router";
import { EmployeeLandingComponent } from "./employee-landing/employee-landing.component";
import { EmployeeTableComponent } from "./employee-table/employee-table.component";
import { RegisterTableComponent } from "./register-table/register-table.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";



export const routes: Routes = [
    {path: '', pathMatch: 'full', component: EmployeeLandingComponent},
    {path: 'employees', component: EmployeeTableComponent},
    {path: 'register', component: RegisterTableComponent},
    {path: 'employeedetails', component: EmployeeDetailComponent},

 ];
     