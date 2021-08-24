/* 
    - Comandos importantes do MySQL

    SHOW DATABASES; // Exibe todos os bancos de dados criados

    USE nomedobanco; // Define qual banco de dados você deseja utilizar no momento

    SHOW TABLES; // Exibe todas as tabelas de um determinado banco de dados

    DESCRIBE nomedatabela; // Exibe todas as colunas de uma determinada tabela
*/

/* Criando uma tabela com o nome usuario e as colunas nome, email e idade */
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade int
);

/* Inserindo dados dentro da tabela usuarios */
INSERT INTO usuarios(nome, email, idade)
VALUES ('Lucas', 'lucas@gmail.com', 23);

/* 
    - Visualizando dados cadastrados:

    SELECT * FROM usuarios 
*/
