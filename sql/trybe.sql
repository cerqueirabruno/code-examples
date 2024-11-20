-- DQL # data query language: usado para recuperar dados de um banco de dados. comandos dql são usados para fazer consultas ou buscar informações de tabelas;
-- DML # data manipulation language: usado para manipular os dados dentro do banco de dados. comandos dml são usados para inserir, atualizar, recuperar e excluir dados de tabelas existentes;
-- DDL # data definition language: é usado para definir a estrutura do banco de dados. comandos ddl são utilizados para criar, modificar e excluir objetos do banco de dados, como tabelas, índices, e assim por diante;
-- DCL # data control language: responsável pelo controle de acesso e segurança no banco de dados. comandos dcl são usados para conceder ou revogar privilégios de acesso a usuários e para controlar outros aspectos de segurança do banco de dados;
-- DTL # data transaction language: embora menos comum, o dtl (ou transaction control language) é usado para gerenciar transações no banco de dados, como iniciar, confirmar ou reverter transações;



-- entidade: tabela
-- registro: linha
-- diagrama: 
-- diagrama entidade-relacionamento: é uma ferramenta para modelar os dados de um sistema de informação. ele é composto por entidades, que são objetos ou conceitos sobre os quais se deseja armazenar informações, e pelos relacionamentos entre essas entidades;
-- constraint: são regras aplicadas a colunas de uma tabela que definem os tipos de dados permitidos, restrições de integridade e comportamentos de atualização. elas garantem a consistência e a validade dos dados armazenados no banco de dados;

-- chave primária: identificador único
-- chave estrangeira: referência a outra tabela
-- índice: otimização de busca
-- atributo: coluna



-- TIPO DE DADOS SQL
-- int: inteiro
-- float: número decimal
-- chat(n): string de tamanho fixo
-- varchar(n): string de tamanho variável com limite
-- text: string de tamanho variável sem limite
-- date: data
-- primary key: chave primária
-- foreign key: chave estrangeira
-- not null: não pode ser nulo
-- default: valor padrão
-- auto_increment: incrementa automaticamente
-- now(): data atual
-- unique: valor único



-- OPERADORES SQL - RELACIONAIS
-- (>) maior que
-- (<) menor que
-- (>=) maior ou igual
-- (<=) menor ou igual
-- (=) igual a
-- (<>) diferente de



-- OPERADORES SQL - LÓGICOS
-- and: e
-- or: ou
-- not: não



-- OPERADORES SQL - DE COMPARAÇÃO
-- like: procura por um padrão
-- in: especifica múltiplos valores
-- between: procura por um intervalo



-- RELACIONAMENTOS SQL
-- 1:1: um para um
-- 1:N: um para muitos
-- N:M: muitos para muitos



-- MODO-SEGURO (UPDATE/DELETE)
-- SHOW VARIABLES LIKE "SQL_SAFE_UPDATES"; # verificar se o modo-seguro está ativado
-- SET SQL_SAFE_UPDATES = 1; # ativar o modo-seguro
-- SET SQL_SAFE_UPDATES = 0; # desativar o modo-seguro



-- COMANDOS SQL

# CRIAR DATABASE;
-- CREATE DATABASE NameDataBase;

# CRIAR TABELA;
-- CREATE TABLE tabela(
--     coluna1 INTEGER,
--     coluna2 VARCHAR(10),
--     coluna3 DATE
-- );

# INSERIR DADOS NA TABELA;
-- INSERT INTO tabela (coluna1, coluna2)
-- 	VALUES (valorN, valorN),
-- 	VALUES (valorN, valorN),
-- 	VALUES (valorN, valorN);



USE NameDataBase; -- USAR DATABASE;

-- MODIFICAR DADOS EXISTENTES EM UMA TABELA;
UPDATE nome_da_tabela SET 
    nome_da_coluna = novo_valor
WHERE condicao;

ALTER TABLE nome_da_tabela ADD COLUMN coluna INTEGER;  -- ADICIONAR COLUNA EM TABELA EXISTENTE;

DELETE FROM nome_da_tabela WHERE condição; -- EXCLUIR LINHA DE TABELA;



-- CONSULTAS
SELECT * FROM nomeDaTabela; -- CONSULTA COMPLETA;
SELECT coluna FROM nomeDaTabela; -- CONSULTA DE COLUNA ESPECÍFICA;
SELECT * FROM nomeDaTabela WHERE condição; -- CONSULTA COM CONDIÇÃO;
SELECT coluna1 AS 'novoNomeColuna1', coluna2 AS 'novoNomeColuna2' FROM nomeDaTabela; -- CONSULTA COM NOME MODIFICADO (RELATÓRIOS);