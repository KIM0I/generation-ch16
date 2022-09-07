USE sakila;
SELECT * FROM film_actor;
-- Título de películas con el idioma que tienen
SELECT title, name FROM film, language;

-- Actores en películas francesas
SELECT first_name, last_name FROM actor WHERE ;

-- Direcciones dada una ciudad
SELECT * FROM address, city  WHERE city_id IN (city.city = 'Moscow');
-- Seleccionar actor y las películas en las que se ha involucrado + descripción de la película

-- Peli que generó más dinero

-- Actores que hacen películas de una cierta categoría

-- Peli que generó más dinero

-- Pelis en un mismo idioma

-- Direcciones de cada país

-- Monto total que pagó un cliente por películas el día 2005-06-15
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;


