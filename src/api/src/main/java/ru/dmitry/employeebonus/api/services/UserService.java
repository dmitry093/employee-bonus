package ru.dmitry.employeebonus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.dmitry.employeebonus.api.contracts.UserRepository;
import ru.dmitry.employeebonus.api.models.dto.UserDto;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserDto> findAll(){
        return userRepository.findAll()
                .stream()
                .map(UserDto::new)
                .collect(toList());
    }
}
