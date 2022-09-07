-- show databases; comentario de una línea
/* Comentario
de 
bloque*/

create database tienda;
use tienda;
drop database tienda;
CREATE TABLE clientes( cliente_id INT NOT NULL auto_increment primary key,
nombre CHAR(50) NOT NULL,
apellido char(50) not null,
telefono char(50) not null,
direccion varchar(150) not null
);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
values('Pedro', 'Páramo', '5554535251', 'Comala'),
('Victor', 'Fernández', '5554535251', 'Comala'),
('Raúl', 'Sánchez', '5554535251', 'Guadalajara');
select * FROM clientes;

delete from clientes
where cliente_id = 13;

delete from clientes 
where nombre = 'Pedro';