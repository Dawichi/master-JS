'use strict'

/*
 *  Muestra todos los numeros divisores de un numero introducido
**/

var num = 0;

num = parseInt(prompt("Introduzca un número", 0));

for (let index = 1; index <= num; index++) {
    
    if (num%index == 0) {
        console.log(`Divisor: ${index}`);
    }
}