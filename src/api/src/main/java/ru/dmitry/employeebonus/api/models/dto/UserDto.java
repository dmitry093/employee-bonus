package ru.dmitry.employeebonus.api.models.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.dmitry.employeebonus.api.models.mysqldb.Role;
import ru.dmitry.employeebonus.api.models.mysqldb.User;

import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
    @JsonProperty("id")
    @JsonInclude(NON_NULL)
    private int id;

    @JsonProperty("username")
    @JsonInclude(NON_NULL)
    private String username;

    @JsonProperty("is_active")
    @JsonInclude(NON_NULL)
    private Boolean isActive;

    @JsonProperty("roles")
    private List<String> roles;

    public UserDto(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.isActive = user.getIsActive();
        this.roles = user.getRoles()
                .stream()
                .map(Role::getName)
                .collect(Collectors.toList());
    }
}
