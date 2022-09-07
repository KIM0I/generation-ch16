USE generation;
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- Ejercicio 2
SELECT Students.*, idtypes.id_idTypes, idtypes.name FROM Students 
INNER JOIN idtypes 
ON Students.IdType_id = idtypes.id_idTypes;

-- Ejercicio 3
SELECT 
Students.*, 
Courses_has_students.course_code
FROM Students 
INNER JOIN courses_has_students
ON Students.idStudent = Courses_has_students.students_id_student;

-- Ejercicio 4
SELECT 
courses_has_students.students_id_student, 
courses.name 
FROM courses_has_students
INNER JOIN courses 
ON courses.code = courses_has_students.course_code;

-- Ejercicio 5

-- Parte 2
-- Ejercicio 1
SELECT 
students.*, 
countries.name
FROM Students
INNER JOIN countries 
ON students.nationality = countries.idCountries
WHERE countries.Name = 'Colombia';

-- Ejercicio 2
SELECT countries.name 
From countries
WHERE countries.name LIKE 'Ca%';

-- Ejercicio 3
SELECT COUNT(courses_has_students.students_id_student) AS 'Cantidad de alumnos inscritos' FROM courses_has_students WHERE courses_has_students.course_code = 'JAVA-1' ;

-- Ejercicio 4
SELECT SUM(Courses.credits) AS 'Total de créditos' FROM courses WHERE courses.name LIKE '%JAVA%';