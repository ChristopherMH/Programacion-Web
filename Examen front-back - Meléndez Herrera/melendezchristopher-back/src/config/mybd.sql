CREATE DATABASE bd_autos;

USE bd_autos;

CREATE TABLE auto(
	id INT NOT NULL AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(60) NOT NULL,
    anio VARCHAR(4),
    color VARCHAR(20),
    PRIMARY KEY(id)
);

INSERT INTO auto (modelo, marca, anio, color)  VALUES ('Sentra', 'Nissan', '2018', 'Tinto');
INSERT INTO auto (modelo, marca, anio, color)  VALUES ('F-150', 'Ford', '2020', 'Negro');