import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any=[];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })

  }
  /**Subscribe devuelve el responde del http, entonce se asigna ese response al employees property */

  deleteEmp(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  updateEmp(id:number){
    this.router.navigate(['update-employee', id])
  }

  empDetails(id:number){
    this.router.navigate(['employee-details', id])
    //this.router.navigate(['update-employee', id])
    console.info("empDetails")
  }

}
