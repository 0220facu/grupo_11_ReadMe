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

insert into categories (name) values ('Suspenso');
insert into categories (name) values ('Terror');
insert into categories (name) values ('Cocina');
insert into categories (name) values ('Niños');
insert into categories (name) values ('Ciencia');
insert into categories (name) values ('Programación');
insert into categories (name) values ('Ciencia ficción')

insert into writer (name, birth_date) values ("Charles Perrault", "1628-1-12");
insert into writer (name, birth_date) values ("Ariel Rodriguez Palacios", "1967-11-10");
insert into writer (name, birth_date) values ("Carl Sagan", "1934-11-9");
insert into writer (name, birth_date) values ("Matt Thomas", "1987-5-7");
insert into writer (name, birth_date) values ("George Lucas", "1944-5-14");


insert into editorial (name) values ("Ledesma");
insert into editorial (name) values ("Planeta");
insert into editorial (name) values ("Digital House");
insert into editorial (name) values ("Planeta Comic");

insert into book (name, year, price, language, synopsis,pages, famous,image, editorial_id, category_id, writer_id ) values ("Caperucita Roja","1990",1000,"Español", "Una niña vestida de rojo es interceptada por un lobo malvado camino a la casa de su abuela","260", 1, "caperucitaroja.jpg",1,5,1);
insert into book (name, year, price, language, synopsis,pages, famous,image, editorial_id, category_id, writer_id ) values ("Master Cheff","2020",5000,"Español", "Guias paso a paso para aprender a cocinar junto con uno de los Cheff mas reconocidos de la Argentina","95", 0, "cocina.jpg",2,4,2);
insert into book (name, year, price, language, synopsis,pages, famous,image, editorial_id, category_id, writer_id ) values ("Astronomia para princiantes","2015",12000,"Español", "El libro trata temas como la posibilidad de encontrar vida en otros planetas o el futuro del Sistema Solar. Y cuenta con un atractivo añadido: más de 250 espectaculares fotos en color.","355", 1, "cuadernodeciencia.jpg",2,6,3);
insert into book (name, year, price, language, synopsis,pages, famous,image, editorial_id, category_id, writer_id ) values ("Html y Css","2009",1200,"Español",  "Desarrolla tus habilidades con el Front-End a traves de Html y Css! Con este libro aprenderas a diseñar las vistas de tus paginas web","102", 0, "html.png",3,7,4);
insert into book (name, year, price, language, synopsis,pages, famous,image, editorial_id, category_id, writer_id ) values ("Star wars","1998",10000,"Ingles", "Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remoto mundo helado de Hoth ","579", 1, "starwars.jpg",4,8,5);