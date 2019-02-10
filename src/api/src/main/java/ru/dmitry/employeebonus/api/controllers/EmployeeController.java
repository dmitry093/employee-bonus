package ru.dmitry.employeebonus.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import ru.dmitry.employeebonus.api.models.dto.EmployeeDto;
import ru.dmitry.employeebonus.api.models.mysqldb.Employee;
import ru.dmitry.employeebonus.api.services.EmployeeService;

import java.net.URI;
import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @CrossOrigin
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> retrieveAllEmployees() {
        return ResponseEntity.ok(employeeService.findAll());
    }

    @CrossOrigin
    @GetMapping("/employee/{id}")
    public ResponseEntity<EmployeeDto> retrieveEmployee(@PathVariable int id){
        EmployeeDto employee = employeeService.findById(id);
        if (employee == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);
    }

    @CrossOrigin
    @DeleteMapping("/employee/{id}")
    public ResponseEntity deleteEmployee(@PathVariable int id){
        EmployeeDto employeeDto = employeeService.findById(id);

        if (employeeDto == null)
            return ResponseEntity.notFound().build();

        employeeService.deleteById(id);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Object> updateStudent(@RequestBody EmployeeDto updatedEmployee, @PathVariable int id) {

        EmployeeDto employeeDto = employeeService.findById(id);

        if (employeeDto == null)
            return ResponseEntity.notFound().build();

        updatedEmployee.setId(id);

        employeeService.save(updatedEmployee);

        return ResponseEntity.noContent().build();
    }

    @CrossOrigin
    @PostMapping("/employee")
    public ResponseEntity<Object> createEmployee(@RequestBody EmployeeDto employee) {
        Employee savedEmployee = employeeService.save(employee);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedEmployee.getId()).toUri();

        return ResponseEntity.created(location).build();
    }
}
