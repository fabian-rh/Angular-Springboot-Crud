import { HttpClient } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8080/api/v1/employees"

  constructor(private httpClient:HttpClient) { }

  //se devuelve una lista, se pasa un array en parametros
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  //Se devuelve un objeto por medio de Observable
  createEmployee(e:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, e);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number, e:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,e);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
