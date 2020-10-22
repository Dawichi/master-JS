'use strict'

/* 
 *  Tabla de multiplicar de un numero introducido
**/

var num = parseInt(prompt("Introduzca un número para ver su tabla", 1));

for (let index = 1; index <= 10; index++){
    
    document.write(`${index} x ${num} = ` + (index * num) + "<br>"); 
}

