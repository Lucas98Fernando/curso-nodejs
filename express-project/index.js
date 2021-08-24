// Importando o express
const express = require('express')
// Atribuindo a função express a variável app, cria uma "cópia" inteira do framewok para variável app
const app = express()

// Caminho para o diretório onde está localizado os arquivos HTMl
const caminhoDoHtml = __dirname + "/html/index.html"
const caminhoSobre = __dirname + "/html/sobre.html"

// Definindo rotas
app.get('/', function (req, res) {
    /* res.send("Olá ! Aprendendo Node.js com Express") // Enviando uma resposta para o cliente com o send() */
    res.sendFile(caminhoDoHtml)
})

app.get('/sobre', function (req, res) {
    res.sendFile(caminhoSobre)
})

// Criando parâmetro para rota
// Dentro de uma rota só podemos utilizar o send() uma única vez
app.get('/ola/:nome/:idade', function (req, res) {
    res.send(`<h1>Olá, ${req.params.nome}!</h1>` +
        `<h2>Sua idade é: ${req.params.idade}</h2>`)
})

// Criando o servidor com o express, o listen é uma função do tipo callback e com isso podemos executar alguns método dentro dela, ele deve ser o último método do arquivo
app.listen(8081, function () {
    console.log('Servidor funcionando corretamente!')
    console.log('Rodando em: http://localhost:8081')
})