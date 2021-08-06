// Importando o express
const express = require('express')
// Atribuindo a função express a variável app, cria uma "cópia" inteira do framewok para variável app
const app = express()

// Definindo rotas
app.get('/', function (req, res) {
    res.send("Olá ! Aprendendo Node.js com Express") // Enviando uma resposta para o cliente com o send()
})

app.get('/sobre', function (req, res) {
    res.send("Página sobre")
})

// Criando o servidor com o express, o listen é uma função do tipo callback e com isso podemos executar alguns método dentro dela, ele deve ser o último método do arquivo
app.listen(8081, function () {
    console.log('Servidor funcionando corretamente!')
    console.log('Rodando em: http://localhost:8081')
})