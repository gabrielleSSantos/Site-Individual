-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */

CREATE DATABASE GabiTrancas;
USE GabiTrancas;

-- TABELA USUARIO
CREATE TABLE usuario(
	idusuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
	email varchar(45),
    senha varchar(20),
    rua VARCHAR(45),
    numero INT,
    bairro VARCHAR(45),
    telefone CHAR(11),
    genero char(3) check (genero = 'FEM' or genero = 'MAS')
);

-- TABELA HORARIO
 CREATE TABLE horario (
	idhorario int primary key auto_increment, 
   dia DATE,
   horarioAgendamento TIME
 );
 
 ALTER TABLE horario ADD COLUMN StatusHorario VARCHAR(12) constraint CNK_STATUS 
 CHECK (StatusHorario= 'Disponivel' or StatusHorario = 'Indisponivel');

-- TABELA AGENDAMENTOS
 CREATE TABLE Agendamentos(
	idagendamentos INT primary KEY auto_increment,
    observavao VARCHAR(45),
    TrancaEscolha VARCHAR(25),
    FKusuario int, foreign key (FKusuario) references usuario(idusuario)
 );
ALTER TABLE Agendamentos add column fkHorario INT, ADD foreign key(fkHorario) references Horario(idhorario);
 
	DESC AGENDAMENTOS;

-- simulando os dados 
 INSERT INTO usuario(idusuario, nome, email, senha) VALUES
 (NULL, 'gabrielle teste', 'gabrielle@gmail', 'gabi');
 
 UPDATE USUARIO SET telefone = "11943131977" WHERE IDUSUARIO= 1;
 
 select * from usuario;
 
 INSERT INTO Horario VALUES
 (NULL, '2022-06-01', '10:00', 'Disponivel'),
 (NULL ,'2022-06-01', '12:00',  'Disponivel'),
 (NULL ,'2022-06-01', '14:00',  'Disponivel'),
 (NULL ,'2022-06-02', '10:00',  'Disponivel'),
 (NULL ,'2022-06-02', '12:00',  'Disponivel'),
 (NULL ,'2022-06-02', '14:00',  'Disponivel');
 

 SELECT * FROM Horario;
 
 INSERT INTO Agendamentos VALUES
 (null, 'nada', 'Topo', 1 , 1);
 
 SELECT * FROM Agendamentos JOIN USUARIO on fkusuario=idusuario JOIN HORARIO ON FKHORARIO=IDHORARIO;
 