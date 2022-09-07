CREATE DATABASE generation;
USE generation;
CREATE TABLE cohorte_16(alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companeros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

INSERT INTO cohorte_16 (nombre, apellido, companeros, direccion, proyecto)
VALUES ('Fabi','Gómez', 6, 'CDMX', 'DinoDevs'),
('Raúl','Sánchez', 3,'GDL', 'VacasGalácticas'),
('María', 'Vargas', 6, 'MTY', 'Backgrounders'),
('Victor', 'Fernández', 7, 'HG', 'TecnoGurús'),
('Jonathan', 'Vázquez', 4, 'EDOMEX', 'Krelboings');

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

UPDATE cohorte_16
SET nombre = 'Antonio'
where alumno_id=5;

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido ASC;


