// O mongoose é um ODM utilizado para abstrair o MongoDB

// Importando o mongoose
const mongoose = require('mongoose')

// Configurando o mongoose

mongoose.Promise = global.Promise
// Informando a URL que você deseja conectar o MongoDB, nesse exemplo será criada uma conexão local com o nome do banco aprendendomongo
mongoose.connect('mongodb://localhost/aprendendomongo', {
        // Para evitar alguns erros de conexão
        // No linux a linha do useMongoClient precisa está comentada
        // useMongoClient: true
    })
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida com sucesso!')
    })
    .catch((erro) => {
        console.error(`Não foi possível realizar a conexão com o MongoDB: ${erro}`)
    })