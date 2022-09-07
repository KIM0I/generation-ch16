CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE cohorte(
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);
INSERT INTO cohorte (
alumno_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (0, 0, 47, '9:30 a 17:30', 'Síncronas', 'CDMX'),
(0, 0, 45, '9:30 a 17:30', 'Asíncronas','GDL');

SELECT * FROM cohorte;




CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);
INSERT INTO alumno (
nombre, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES ('Daniel', 25, 'CURP1', 'RFC1', 'C2', 2),
('Cyntya', 26, 'CURP2', 'RFC2', 'C1', 0);

SELECT * FROM alumno, instructor;

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);
INSERT INTO instructor (
nombre, edad, cumpleanios, RFC, supervisor, sesiones)
VALUES ('Victor', 40, '2022-04-06', 'RFCVic', 'Marina', 'Java'),
('Raúl', 31, '2022-03-22', 'RFCRaul', 'Marina', 'JavaScript');


CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL);
INSERT INTO equipo (
alumno_id, nombre, cantidad_integrantes, logo)
VALUES (0, 'DinoDevs', 7, 'Epic Merch'),
(0, 'Shades', 8, 'Shades');

CREATE TABLE direccion(
direccion_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);
INSERT INTO direccion (
alumno_id, calle, pais, cp)
VALUES (0, 'Gatito', 'México', 03500),
(0, 'Perrito', 'Irlanda', 85630);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES instructor (instructor_id);

