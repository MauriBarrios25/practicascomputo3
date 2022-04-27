
var readline = require('readline');

var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Ingresa el primer numero: '  , (num1) => {
    console.log('Registrado: ' , num1)
})
rl.question('Ingresa el segundo numero: ' , (num2) => {})






function sumar(num1, num2){

    num3 = num1 + num2

};

function restar(num1, num2){

    num3 = num1 - num2

};

function multiplicar(num1, num2){

    num3 = num1 * num2

};

function dividir(num1, num2){

    num3 = num1 / num2

};