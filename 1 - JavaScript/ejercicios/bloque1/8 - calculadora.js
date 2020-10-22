'use strict'

/*
 *  Calculadora:
 *  Pide 2 números. Si se mete uno mal, lo vuelve a pedir.
 * En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar y multiplicar esas dos cifras.
**/

var num1 = parseInt(prompt("Introduzca el número 1", 0));
var num2 = parseInt(prompt("Introduzca el número 2", 0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    var num1 = parseInt(prompt("Introduzca el número 1", 0));
    var num2 = parseInt(prompt("Introduzca el número 2", 0));
}

var resultado = `<h1>Resultado: </h1> <br>
                <h2>Suma: </h2>${num1 + num2} <br>
                <h2>Resta: </h2>${num1 - num2} <br>
                <h2>Multiplicación: </h2>${num1 * num2} <br>
                <h2>División: </h2>${num1 / num2} <br>`

document.write(resultado);

alert(`Suma: ${num1 + num2} Resta: ${num1 - num2} Multiplicación: ${num1 * num2} División: ${num1 / num2}`);

console.log(`Suma: ${num1 + num2} Resta: ${num1 - num2} Multiplicación: ${num1 * num2} División: ${num1 / num2}`);