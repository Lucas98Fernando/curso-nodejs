/* 
    - Utilizando o conceito de módulos do Node.js, para compartilhar funções, visando maior organização e encapsulamento de funcionalidades
*/

// Importando os módulos e atribuindo a uma variável
const funcaoSomar = require('./soma')
const funcaoSubtrair = require('./subtracao')
const funcaoMultiplicar = require('./multiplicacao')
const funcaoDividir = require('./divisao')

console.log(funcaoSomar(4, 4))
console.log(funcaoSubtrair(8, 2))
console.log(funcaoMultiplicar(2, 2))
console.log(funcaoDividir(10, 5))