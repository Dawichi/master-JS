'use strict'

/*
 * Programa que pida 2 números, y que diga cúal es mayor, el menor y si son iguales
**/

var { num1, num2 } = newFunction();

console.log(num1, num2);

function newFunction() {

    while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
        let num1 = parseInt(prompt("Introduzca el número 1", 0));
        let num2 = parseInt(prompt("Introduzca el número 2", 0));
    }

    if (num1 == num2) {
        console.log(`Los números ${num1} y ${num2} son iguales`);
    }
    else if (num1 > num2) {
        console.log(`El mayor es el ${num1} y el menor es ${num2}`);
    }
    else if (num1 < num2) {
        console.log(`El mayor es el ${num2} y el menor es ${num2}`);
    }
    else {
        alert("Introduce números correctos");
    }
    return { num1, num2 };
}

