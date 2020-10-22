'use strict'

function imprime(texto) {
    var hola = "texto variable local";
    
    console.log(texto);
    console.log(num);   // Puede acceder a la variable local definida fuera de la función
}

var texto = "hola, esto es una variable global";
var num = 12;

imprime(texto);

console.log(hola); // No funciona, no puede acceder a la definición de la variable local de la funcion

