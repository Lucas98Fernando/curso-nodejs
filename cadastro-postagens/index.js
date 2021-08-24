// Importando o express
const express = require('express')
// Atribuindo a função express a variável app, cria uma "cópia" inteira do framewok para variável app
const app = express()
// O handlebars é um "template engine"
// Importando o módulo do handlebars do express
const handlebars = require('express-handlebars')
// Importando o módulo do Sequelize
const Sequelize = require('sequelize')

// Configuração do template engine do handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Conexão com o MySQL
// Configurações para conexão com o banco de dados 
// Os parâmetros que ele recebe é o nome do banco, nome do usuário, senha e um objeto 
const sequelize = new Sequelize('bancoTeste', 'root', 'lucas98', {
    host: 'localhost',
    dialect: 'mysql'
})

// Rotas
app.get('/cadastro', function (req, res) {
    // Rederizando o arquivo de formulário handlebar que está na pasta views, não precisa colocar a extensão
    res.render('formulario')
})

// Criando o servidor com o express, o listen é uma função do tipo callback e com isso podemos executar alguns método dentro dela, ele deve ser o último método do arquivo
app.listen(8081, function () {
    console.log('Servidor funcionando corretamente!')
    console.log('Rodando em: http://localhost:8081')
})