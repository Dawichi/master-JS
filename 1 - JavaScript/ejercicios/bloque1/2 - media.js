'use strict'

/*
 *  Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
 *  hasta introducir un numero negativo y entonces mostrar el resutado
**/

var num = "";
var suma = 0;
var media = 0;
var contador = 0;
var stop = false;

alert("El programa te pedirá números infinitamente, mostrando la suma y media. Se detendrá al introducir un número negativo");

while (!stop) {
    num = parseInt(prompt("Introduzca un número", 0));

    if (num > 0) {
        contador++;
        suma = suma + num;
        media = suma / contador;
        
        alert(`Hasta ahora la suma de los ${contador} números son ${suma}, con una media de ${media}`)
    } else {
        var stop = true;
    }
}

alert(`DETENIDO - Resultado: ${suma}; Media: ${media};`)