package ru.dmitry.employeebonus.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.dmitry.employeebonus.api.models.dto.EmployeeDto;
import ru.dmitry.employeebonus.api.services.EmployeeService;

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
}
