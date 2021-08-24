// Importando o express
const express = require('express')
// Atribuindo a função express a variável app, cria uma "cópia" inteira do framewok para variável app
const app = express()
// O handlebars é um "template engine"
// Importando o módulo do handlebars do express
const handlebars = require('express-handlebars')

// Configuração do template engine do handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Configuração com o express para o dados do body da requisição HTTP
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// Rotas
app.get('/cadastro', function (req, res) {
    // Rederizando o arquivo de formulário handlebar que está na pasta views, não precisa colocar a extensão
    res.render('formulario')
})

// Essa rota só será acessada quando houver uma requisição HTTP com o método POST
// Não é possível acessar essa rota diretamente via URL
app.post('/adicionar', function (req, res) {
    // Pegando dados do formulário e exibindo na resposta
    res.send(`O título da postagem: ${req.body.titulo} | O conteúdo da postagem: ${req.body.conteudo}`)
})

// Criando o servidor com o express, o listen é uma função do tipo callback e com isso podemos executar alguns método dentro dela, ele deve ser o último método do arquivo
app.listen(8081, function () {
    console.log('Servidor funcionando corretamente!')
    console.log('Rodando em: http://localhost:8081')
})