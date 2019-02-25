CREATE TABLE IF NOT EXISTS employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  second_name VARCHAR(255) NOT NULL,
  patronymic VARCHAR(255),
  PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  is_active BOOLEAN NOT NULL,
  PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS  role (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  CONSTRAINT user_roles_FK_1
  FOREIGN KEY (user_id)
  REFERENCES user (id)
    ON DELETE CASCADE,
  INDEX `user_roles_FI_1` (`user_id`),
  CONSTRAINT user_roles_FK_2
  FOREIGN KEY (role_id)
  REFERENCES role (id)
    ON DELETE RESTRICT
)ENGINE=INNODB;

INSERT INTO `employee` VALUES (1, 'Иван', 'Иванов', 'Иванович');
INSERT INTO `role` VALUES (1, 'ROLE_ADMIN'), (2, 'ROLE_USER');
INSERT INTO `user` VALUES (1, 'admin', '$2a$10$UL1YwI31LFoGKLydWnMVteXHyQXGurUaTLTwzd2x1StuzwQeNxhOS', 1);
INSERT INTO `user_roles` VALUES (1, 1);
