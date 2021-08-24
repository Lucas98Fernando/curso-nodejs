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