package ru.dmitry.employeebonus.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.dmitry.employeebonus.api.models.dto.UserDto;
import ru.dmitry.employeebonus.api.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

    @CrossOrigin
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> retrieveAllUsers() {
        return ResponseEntity.ok(userService.findAll());
    }
}
