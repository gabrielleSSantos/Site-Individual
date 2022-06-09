CREATE DATABASE GABITRANCAS;
USE GABITRANCAS;


-- TABELAS
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



-- inserção de dados no agendamentos
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
-- INSERÇÃO DE USUARIO
INSERT INTO USUARIO VALUES
(NULL, 'Gabrielle Silva', 'gabrielle.santos@gmail.com', 'gabi123', 'Rua Barão Joaquim do Amparo', 215,'Inacio Monteiro', '11943131977', 'FEM'),
(NULL, 'Ruan Pablo', 'ruan@gmail.com', 'ruan215' , 'Rua lapetina Russo', '28', 'Santo Amaro', '11947859624','MAS'),
(NULL, 'Eduarda Calixto', 'eduarda@gmail.com', 'duda125','Rua lapetina Russo', '28', 'Santo Amaro', '11947859624','MAS' ),
(null, 'Vitor Silva', 'vitor@gmail.com' , 'vitor',  'Rua lapetina Russo', '28', 'Santo Amaro', '11947859624','MAS'); 


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