package ru.dmitry.employeebonus.api.contracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.dmitry.employeebonus.api.models.mysqldb.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
