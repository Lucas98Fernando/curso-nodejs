// Importando o módulo de conexão com o banco de dados
const db = require('./db')

// Definindo o model dos posts para criar as tabelas e colunas no MySQL
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Sincronizando a tabela e as colunas criadas, esse comando só precisa ser executado uma vez

// Post.sync({
//     force: true
// })

// Exportando o Post como módulo
module.exports = Post