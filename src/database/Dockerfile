FROM mysql

ENV MYSQL_DATABASE employee_bonus

COPY my.cnf /etc/mysql/conf.d

COPY ./dump/ /docker-entrypoint-initdb.d/