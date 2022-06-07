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

ALTER TABLE AGENDAMENTO modify COLUMN escolha_tranca VARCHAR (45);
 INSERT INTO Agendamento(horario) VALUES
('2022-06-09 10:00'),
 ('2022-06-09 13:00'),
 ('2022-06-10 10:00'),
 ('2022-06-10 13:00'),
  ('2022-06-11 10:00'),
 ('2022-06-11 13:00'),
  ('2022-06-12 10:00'),
('2022-06-12 13:00')
 ;

truncate AGENDAMENTO;

-- SELECTS 
SELECT * FROM AGENDAMENTO;
 SELECT * FROM USUARIO;
SELECT date_format (horario, '%d-%m às %Hh%i') as horarios from AGENDAMENTO WHERE FKUSUARIO IS NULL;
SELECT * FROM AGENDAMENTO JOIN USUARIO ON FKUSUARIO=IDUSUARIO;
SELECT count(idusuario) from usuario WHERE GENERO = 'MAS';
select count(idusuario) from usuario;

select genero as descricao, count(genero) as genero from usuario group by genero
union 
select genero as descricao, count(genero) as genero from usuario;

SELECT * FROM AGENDAMENTO LEFT JOIN USUARIO ON IDUSUARIO=FKUSUARIO;