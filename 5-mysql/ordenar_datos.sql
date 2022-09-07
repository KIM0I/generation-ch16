USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias

SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Distinct OMITE los datos repetidos

-- WHERE cláusula - si no se cumple la condición, la búsqueda no se realiza

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent DESC;

-- Between / se utiliza con WHERE

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND -- Operadores lógicos

SELECT * FROM country WHERE Continent = 'Asia' OR Continent != 'Europe';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe';

-- operador IN
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe') ORDER BY Continent;

SELECT * FROM country WHERE IndepYear IS NOT NULL;

-- LIKE Sirve para buscar un patrón en específico
-- % sirve para buscar cualquier entidad de caracteres
-- _ Especifíca un caracter

SELECT Name FROM country WHERE Name LIKE '%x%';
SELECT Name FROM country WHERE Name LIKE '%e__a';