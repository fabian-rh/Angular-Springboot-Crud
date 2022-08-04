package com.crudapp.springbootbackend.repository;

import com.crudapp.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // JPA Repository contiene los metodos para acceso a los datos
}
