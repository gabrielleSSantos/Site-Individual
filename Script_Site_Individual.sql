CREATE DATABASE GABITRANCAS;
USE GABITRANCAS;

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

CREATE TABLE Agendamento(
	idagendamento INT primary KEY auto_increment,
    observacao VARCHAR(45),
    escolha_tranca VARCHAR(25),
	horario datetime,
    FKusuario int, foreign key (FKusuario) references usuario(idusuario)
 );

 INSERT INTO usuario(idusuario, nome, email, senha) VALUES
 (NULL, 'gabrielle teste', 'gabrielle@gmail', 'gabi');
 
 INSERT INTO Agendamento(horario) VALUES
 ('2022-06-03 10:00'),
 ('2022-06-03 13:00'),
 ('2022-06-04 10:00'),
 ('2022-06-04 13:00')
 ;
 
 SELECT * FROM AGENDAMENTO;
 
 SELECT date_format(horario, '%d-%m-%y %H:%i:%s') as horarios FROM AGENDAMENTO WHERE FKUSUARIO IS NULL;
 

 UPDATE AGENDAMENTO SET observacao = 'alalal' , escolha_tranca = 'topo' , fkusuario = 1 
 WHERE IDAGENDAMENTO = (SELECT IDAGENDAMENTO FROM(SELECT IDAGENDAMENTO FROM AGENDAMENTO 
 WHERE HORARIO = date_format('02-06-22 13:00:00', '%d-%m-%y %H:%i:%s')) AS IDAGENDAMENTO);