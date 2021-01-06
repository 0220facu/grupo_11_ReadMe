CREATE SCHEMA Grupo_11;

USE Grupo_11;

CREATE TABLE user (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
birth_date DATETIME, 	
adress VARCHAR(50) NOT NULL,
image VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
username VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,


created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo

);

CREATE TABLE book(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
year VARCHAR(5) NOT NULL,
price DECIMAL UNSIGNED NOT NULL,
language VARCHAR(20) NOT NULL,
synopsis text,
pages VARCHAR(10) NOT NULL,
famous BIT,
image VARCHAR(100) NOT NULL,

editorial_id INT UNSIGNED,
category_id INT UNSIGNED,
writer_id INT UNSIGNED,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo

);

CREATE TABLE category(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo

);

CREATE TABLE editorial(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo

);

CREATE TABLE writer(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
birth_date DATETIME, 	


created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo

);

CREATE TABLE interests_user (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    
    category_id INT UNSIGNED,
    user_id INT UNSIGNED,
    
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
    deleted_at DATETIME -- Fecha de borrado del registro completo
);


ALTER TABLE book
ADD FOREIGN KEY (editorial_id) REFERENCES editorial(id),
ADD FOREIGN KEY (category_id)  REFERENCES category(id), 
ADD FOREIGN KEY (writer_id)  REFERENCES writer(id);

ALTER TABLE interests_user		
ADD FOREIGN KEY (category_id) REFERENCES category(id),
ADD FOREIGN KEY (user_id)  REFERENCES user(id) 

