import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private router:Router) { }

  employee:Employee = new Employee();
  id:number=0;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];//se utiliza snapshot para obtener el id del url

    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(data)=>console.log(data),
      error:(error)=> console.log(error),
      complete:() => console.info("complete")
    })
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next:(data)=>console.log(data),
      error:(error)=> console.log(error),
      complete:() => console.info("complete")
    }
    )
    this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
