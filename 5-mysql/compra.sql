use tienda;
SELECT * FROM clientes;

CREATE TABLE compra (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
cantidad_productos 	INT NOT NULL);

SELECT *  FROM compra;

-- Agregar llave foránea

ALTER TABLE compra
ADD CONSTRAINT fk_clientes_compra
FOREIGN KEY (cliente_id)
REFERENCES clientes (cliente_id);

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (3, '2022-09-06', 300.50, 2);


-- Borrar llave foránea
ALTER TABLE compra
DROP FOREIGN KEY fk_clientes_compra;
 
 DROP TABLE compra;