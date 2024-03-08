CREATE DATABASE supermercado;

CREATE TABLE compras(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(30),
    tipo VARCHAR(30),
    descripcion VARCHAR(150),
    calificacion INT,
    cantidad INT,
    total FLOAT,
    fecha TIMESTAMP WITH TIME ZONE
)