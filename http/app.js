// Módulo http do Node
const http = require('http')

// Criando um servidor com o Node e configurando o listen que será o endereço que o mesmo estará rodando
// A função createServer() é do tipo callback e recebe outra função como parâmetro
http.createServer(function (req, res) {
    res.end("Olá !!!") // O end() serve para exibir algo no lado do cliente
}).listen(8081)

console.log("O servidor está ON !")