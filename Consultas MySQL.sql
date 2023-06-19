-- CREAR BASE DE DATOS --
CREATE DATABASE PRUEBATECNICA;
use pruebatecnica;

-- CREACION DE LAS TABLAS -- 
-- TABLA ADMINISTRADOR --
create table Administrador(
id int primary key auto_increment,
nombre varchar(100) not null,
apellido varchar(100) not null,
username varchar(100) unique not null,
password varchar(300) not null,
fechaRegistro timestamp default current_timestamp
);

-- TABLA REGIONES --
create table Regiones(
id int primary key auto_increment,
nombre varchar(100) not null,
fechaRegistro timestamp default current_timestamp
);


-- TABLA SUPERVISORES --
create table Supervisores(
id int primary key auto_increment,
nombre varchar(100) not null,
apellido varchar(100) not null,
regionId int,
fechaRegistro timestamp default current_timestamp,
foreign key (regionId) references Regiones(id)
);

ALTER TABLE Supervisores
DROP FOREIGN KEY supervisores_ibfk_1;

ALTER TABLE Supervisores
ADD FOREIGN KEY (regionId)
REFERENCES Regiones(id)
ON DELETE CASCADE;

select * from Supervisores;
select * from Regiones;

-- TABLA VENDEDORES --
create table Vendedores(
id int primary key auto_increment,
nombre varchar(100) not null,
apellido varchar(100) not null,
supervisorId int,
regionId int,
fechaRegistro timestamp default current_timestamp,
foreign key (supervisorId) references Supervisores(id),
foreign key (regionId) references Regiones(id)
);
 
-- TABLA ADMINISTRADOR --
create table Ventas(
id int primary key auto_increment,
vendedorId int,
producto varchar(100) not null,
monto decimal(10, 2) not null,
fechaVenta timestamp default current_timestamp,
foreign key (vendedorId) references Vendedores(id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'KvSmyjd3';