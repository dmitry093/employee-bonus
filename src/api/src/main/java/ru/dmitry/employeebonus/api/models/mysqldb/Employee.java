package ru.dmitry.employeebonus.api.models.mysqldb;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.dmitry.employeebonus.api.models.dto.EmployeeDto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table (name = "employee")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(name="first_name", nullable = false)
    private String firstName;
    @Column(name="second_name", nullable = false)
    private String secondName;
    @Column(name="patronymic")
    private String patronymic;

    public Employee (@NotNull EmployeeDto employeeDto){
        this.id = employeeDto.getId();
        this.firstName = employeeDto.getFirstName();
        this.secondName = employeeDto.getSecondName();
        this.patronymic = employeeDto.getPatronymic();
    }
}
