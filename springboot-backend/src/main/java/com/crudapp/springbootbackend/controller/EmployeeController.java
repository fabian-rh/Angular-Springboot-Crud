package com.crudapp.springbootbackend.controller;

import com.crudapp.springbootbackend.exception.ResourceNotFoundException;
import com.crudapp.springbootbackend.model.Employee;
import com.crudapp.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1")
public class EmployeeController{

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("employees")
    public Employee createEmployee(@RequestBody Employee employee){ // se mapea el json con el object employee
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){// orElseThrow usa functional interfaces, se pasa una funcion lambda
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Error "+id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee e){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Error "+id));
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setEmail(e.getEmail());
        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Error "+id));

        employeeRepository.delete(employee);//delete no devuelve valores
        Map<String, Boolean> response = new HashMap<>();// se cre un map para devolver valores
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
