// O Sequelize é ORM (Object-Relational Mapper) que abstrai toda a camada de banco de dados

// Importando o módulo do Sequelize
const Sequelize = require('sequelize')
// Configurações para conexão com o banco de dados 
// Os parâmetros que ele recebe é o nome do banco, nome do usuário, senha e um objeto 
const sequelize = new Sequelize('bancoTeste', 'root', 'lucas98', {
    host: 'localhost',
    dialect: 'mysql'
})

// Verifica o status da conexão com o banco de dados, utilizando o método authenticate
sequelize.authenticate()
    // Se der certo
    .then(function () {
        console.log('Conexão realizada com sucesso!')
    })
    // Se der erro
    .catch(function (erro) {

        console.log('Não foi possível realizar a conexão.')
        console.log(`Erro: ${erro}`)
    })

// Model
// Com o node.js é possível implementar um model que será responsável por criar tabelas, colunas e etc... Diretamente no banco
// Criando um model para postagens, como o nome da tabela chamada 'postagens'
const Postagem = sequelize.define('postagens', {
    // Montando a tabela
    // A diferença entre o tipo STRING e TEXT é a limitação de caracteres
    titulo: {
        // Definindo o tipo VARCHAR com o Sequelize para a columa titulo
        type: Sequelize.STRING
    },
    conteudo: {
        // Definindo o tipo TEXT para a coluna conteudo
        type: Sequelize.TEXT
    }
})

// Criando registros na tabela postagens, esse comando é semelhante ao INSERT INTO
// Postagem.create({
//     título: 'Aprendendo node.js e mysql',
//     conteudo: 'Aprendendo a realizar conexões ao MySQL com o Node.js, utilizando o Sequelize"'
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Criando registros na tabela usuarios, esse comando é semelhante ao INSERT INTO 
Usuario.create({
    nome: 'Lucas',
    sobrenome: 'Fernando',
    idade: 23,
    email: 'lucas@gmail.com'
})

// Criando o model das postagens e de usuarios e sincronizando no MySQL
// É recomendado excluir ou comentar os comandos abaixo, para evitar que as tabelas sejam criada novamente ao executar o nodemon

// Postagem.sync({
//     force: true
// })

// Usuario.sync({
//     force: true
// })