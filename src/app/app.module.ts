import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeLandingComponent } from './employee-landing/employee-landing.component';
import { HttpClientModule } from '@angular/common/http';
import {routes} from './app.routes';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { RegisterTableComponent } from './register-table/register-table.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLandingComponent,
    EmployeeTableComponent,
    RegisterTableComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
