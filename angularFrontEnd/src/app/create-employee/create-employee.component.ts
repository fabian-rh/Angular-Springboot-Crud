import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();

  //se importa EmployeeService por medio de constructor injection
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    // this.employeeService.createEmployee(this.employee).subscribe(data =>{
    //   console.log(data)
    // },
    // error => console.log(error)
    // )

    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => console.log(data),
      error : (error) => console.error(error),
      complete: () => console.info("complete")
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
    this.goToEmployeeList();
  }

}
