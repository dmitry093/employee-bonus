CREATE TABLE IF NOT EXISTS employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  second_name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)  ENGINE=INNODB;

INSERT INTO `employee` VALUES (1, 'Иван', 'Иванов', 'Иванович');