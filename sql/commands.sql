---- STRUCTURED QUERY LANGUAGE (SQL)


---- CARACTERISTICAS
-- snake_case
-- nomes inglês/plural
-- palavras reservadas em maiúsculo
-- palavras não reservadas em minúsculo
-- ponto e vírgula no final



----  SQL
-- DQL: data query language: usado para recuperar dados de um banco de dados. comandos dql são usados para fazer consultas ou buscar informações de tabelas;
-- DML: data manipulation language: usado para manipular os dados dentro do banco de dados. comandos dml são usados para inserir, atualizar, recuperar e excluir dados de tabelas existentes;
-- DDL: data definition language: é usado para definir a estrutura do banco de dados. comandos ddl são utilizados para criar, modificar e excluir objetos do banco de dados, como tabelas, índices, e assim por diante;
-- DCL: data control language: responsável pelo controle de acesso e segurança no banco de dados. comandos dcl são usados para conceder ou revogar privilégios de acesso a usuários e para controlar outros aspectos de segurança do banco de dados;
-- DTL: data transaction language: embora menos comum, o dtl (ou transaction control language) é usado para gerenciar transações no banco de dados, como iniciar, confirmar ou reverter transações;


---- TIPO DE DADOS SQL
-- PRIMARY KEY: chave primária
-- FOREIGN KEY: chave estrangeira
-- AUTO_INCREMENT: auto incremento
-- INTERGER: número inteiro
-- FLOAT: número decimal
-- VARCHAR(20): string de tamanho variável com limite
-- CHAR(20): string de tamanho fixo
-- TEXT: string de tamanho variável sem limite
-- NOT NULL: não pode ser nulo
-- DATE DEFAULT(NOW()): inseri data atual
-- DATE: data (YYYY-MM-DD)
-- DEFAULT: define um valor padrão para a coluna



---- ???
-- CONSTRAINT: regras aplicadas a tabelas ou colunas para garantir a integridade e a validade dos dados no banco de dados.
-- ENTIDADE: tabela
-- ATRIBUTO: coluna
-- REGISTRO: linha



---- COMANDOS SQL
-- criar banco de dados
CREATE DATABASE DATABASE_NAME;

-- usar banco de dados
USE DATABASE_NAME;

-- criar tabela
CREATE TABLE NAME_TABLE (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    started_at DATE DEFAULT(NOW),
);

-- inserir dados na tabela
INSERT INTO NAME_TABLE (name, started_at)
    VALUES ('name1', '2021-01-01'),
    VALUES ('name2', '2021-01-02'),
    VALUES ('name3', '2021-01-03');

-- consultar dados
SELECT * FROM TABLE_NAME; -- consultar tabela completa
SELECT COLUMN_NAME FROM TABLE_NAME; -- consultar coluna específica
SELECT COLUMN_NAME1, COLUMN_NAME2 FROM TABLE_NAME; -- consultar colunas específicas
SELECT COLUMN_NAME AS 'NEW NAME' FROM TABLE_NAME; -- consultar coluna com nome modificado
SELECT COLUMN_NAME1 AS 'NEW NAME', COLUMN_NAME2 AS 'NEW NAME' FROM TABLE_NAME; -- consultar colunas com nomes modificados
SELECT * FROM TABLE_NAME WHERE id = 1; -- consultar com condição

-- atualizar dados
UPDATE TABLE_NAME SET COLUMN_NAME = 'NEW VALUE' WHERE id = 1; -- atualizar valor de coluna com condição

-- deletar dados
DELETE FROM TABLE_NAME WHERE id = 1; -- deletar linha com condição

-- adicionar coluna
ALTER TABLE TABLE_NAME ADD COLUMN COLUMN_NAME
    BOOLEAN NOT NULL DEFAULT TRUE;

-- renomear coluna
?

-- deletar coluna
?



---- OPERADORES DE COMPARAÇÃO
-- LIKE: utilizado para realizar buscas baseadas em padrões de texto.
-- é comum usá-lo com caracteres curinga: %: representa zero ou mais caracteres _: representa exatamente um caractere.
SELECT * FROM produtos WHERE nome LIKE 'C%'; -- busca produtos cujo nome começa com "C" (ex.: "Cadeira", "Caneta").
SELECT * FROM usuarios WHERE email LIKE '%@gmail.com'; -- busca usuários com e-mails do domínio "gmail.com".

-- IN: permite verificar se um valor está presente em uma lista de valores específicos.
-- é útil para evitar múltiplas condições OR
SELECT * FROM produtos WHERE categoria IN ('Eletrônicos', 'Móveis'); -- retorna produtos cujas categorias sejam "Eletrônicos" ou "Móveis".
SELECT * FROM pedidos WHERE status IN (1, 3, 5); -- busca pedidos com status específicos (1, 3 ou 5).

-- BETWEEN: usado para filtrar valores dentro de um intervalo inclusivo (extremos incluídos).
-- pode ser aplicado a números, datas ou texto (dependendo do tipo de dado).
SELECT * FROM produtos WHERE preco BETWEEN 100 AND 500; -- retorna produtos com preço entre 100 e 500 (inclusive).
SELECT * FROM vendas WHERE data_venda BETWEEN '2024-01-01' AND '2024-12-31'; -- retorna vendas feitas no ano de 2024.



---- OPERADORES RELACIONAIS
-- (>) maior que
-- (<) menor que
-- (>=) maior ou igual
-- (<=) menor ou igual
-- (=) igual a
-- (<>) diferente de



-- OPERADORES LÓGICOS
-- AND: e
-- OR: ou
-- NOT: não



-- ORDEM DE PRECEDÊNCIA DOS OPERADORES
-- ?



-- DATA 
-- YEAR(data): retorna o ano da data
-- MONTH(data): retorna o mês da data
-- DAY(data): retorna o dia do mês da data



-- RELACIONAMENTOS SQL
-- 1:1: um para um
-- 1:N: um para muitos
-- N:M: muitos para muitos



-- MODO-SEGURO (UPDATE/DELETE)
SHOW VARIABLES LIKE "SQL_SAFE_UPDATES"; -- verificar se o modo-seguro está ativado
SET SQL_SAFE_UPDATES = 1; -- ativar o modo-seguro
SET SQL_SAFE_UPDATES = 0; -- desativar o modo-seguro



-- DÚVIDAS
-- como mudar a coluna de lugar de uma tabela?
-- como renomear a coluna de uma tabela?
-- o que é unique?
-- o que é o valor default?
-- o que é índice?