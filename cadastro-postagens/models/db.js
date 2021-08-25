// Importando o módulo do Sequelize
const Sequelize = require('sequelize')

// Conexão com o MySQL
// Configurações para conexão com o banco de dados 
// Os parâmetros que ele recebe é o nome do banco, nome do usuário, senha e um objeto 
const sequelize = new Sequelize('postapp', 'root', 'lucas98', {
    host: 'localhost',
    dialect: 'mysql'
})

// Verificando o status da conexão com o banco de dados
sequelize.authenticate()
    .then(function () {
        console.log('Conexão com o banco de dados estabelecida com sucesso!')
    })
    .catch(function (erro) {
        console.error(`Não foi possível realizar a conexão com o banco de dados: ${erro}`)
    })

// Exportando o Sequelize como módulo
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}