USE tienda;
SELECT * FROM tienda.clientes;
SELECT * FROM tienda.compra;

-- Inner Join
-- Explícita

SELECT * 
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id; -- establece el punto de union

SELECT 
clientes.cliente_id AS 'Número de cliente',
clientes.nombre AS Nombre,
compra.*
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Unión implícita
SELECT * 
FROM clientes,compra
WHERE clientes.cliente_id = compra.cliente_id;

-- Left Join 

SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada país 
USE sakila;
select * from sakila.address;
SELECT * FROM sakila.city;
-- address - city_id
-- city - city_id / country_id
-- country - country_id

SELECT 
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT 
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city 
ON country.country_id = city.country_id
INNER JOIN address ON city.city_id = address.city_id;


