CREATE DATABASE GabiTrancas;
USE GabiTrancas;

CREATE TABLE usuario(
	idusuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
	email varchar(45),
    senha varchar(20),
    rua VARCHAR(45),
    numero INT,
    bairro VARCHAR(45),
    idade int
);

 CREATE TABLE Agendamentos(
	idagendamentos INT primary KEY auto_increment,
    dtHora DATETIME,
    observavao VARCHAR(45),
    TrancaEscolha VARCHAR(25),
    valorTranca int,
    FKusuario int, foreign key (FKusuario) references usuario(idusuario)
 );
 ALTER TABLE Agendamentos ADD COLUMN StatusHorario VARCHAR(12) constraint CNK_STATUS 
 CHECK (StatusHorario= 'Disponivel' or StatusHorario = 'Indisponivel');
 
 insert into usuario values
 (null, 'Gabrielle', 'gabrielle@gmail.com', 'gabi','rua doida', 20, 'inacio monteiro', 18);
 
 SELECT * FROM USUARIO;
 
 /*
 CREATE TABLE DadosGraficos(
 
 );
 */