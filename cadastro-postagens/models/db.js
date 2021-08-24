// Importando o módulo do Sequelize
const Sequelize = require('sequelize')

// Conexão com o MySQL
// Configurações para conexão com o banco de dados 
// Os parâmetros que ele recebe é o nome do banco, nome do usuário, senha e um objeto 
const sequelize = new Sequelize('postapp', 'root', 'lucas98', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}