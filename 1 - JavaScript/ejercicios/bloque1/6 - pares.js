'use strict'

/*
 *  Que nos diga si un numero dado es par o impar.
 *  1. Ventana prompt
 *  2. Si no es válido que nos pida de nuevo el número
**/

var num = parseInt(prompt("Introduzca un número", 0));

while (isNaN(num)) { //is Not a Number
    num = parseInt(prompt("Introduzca un número", 0));
}

if (num % 2 == 0) {
    alert("Es par");
} else {
    alert("Es impar");
}