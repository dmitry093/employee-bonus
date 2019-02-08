package ru.dmitry.employeebonus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import ru.dmitry.employeebonus.api.contracts.EmployeeRepository;
import ru.dmitry.employeebonus.api.models.dto.EmployeeDto;
import ru.dmitry.employeebonus.api.models.mysqldb.Employee;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public List<EmployeeDto> findAll(){
        return employeeRepository.findAll()
                .stream()
                .map(EmployeeDto::new)
                .collect(toList());
    }

    @Nullable
    public EmployeeDto findById(int id){
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.map(EmployeeDto::new).orElse(null);
    }
}
