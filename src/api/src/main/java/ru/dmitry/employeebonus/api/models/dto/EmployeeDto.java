package ru.dmitry.employeebonus.api.models.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import ru.dmitry.employeebonus.api.models.mysqldb.Employee;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
public class EmployeeDto {
    @JsonProperty("id")
    @JsonInclude(NON_NULL)
    private int id;

    @JsonProperty("first_name")
    @JsonInclude(NON_NULL)
    private String firstName;

    @JsonProperty("second_name")
    @JsonInclude(NON_NULL)
    private String secondName;

    @JsonProperty("patronymic")
    private String patronymic;

    public EmployeeDto(Employee employee) {
        this.id = employee.getId();
        this.firstName = employee.getFirstName();
        this.secondName = employee.getSecondName();
        this.patronymic = employee.getPatronymic();
    }
}
