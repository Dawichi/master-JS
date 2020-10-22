'use strict'

/*
 *  Mostrar todos los números impares entre 2 números introducidos por el usuario
**/

var num1 = 0;
var num2 = 0;

alert("El siguiente programa mostrará los números impares comprendidos entre 2 números dados");

num1 = parseInt(prompt("Introduzca el número 1", 0));
num2 = parseInt(prompt("Introduzca el número 2", 0));

function es_impar(num) {    // Useless. En los 'if' del 'for' se puede utilizar directamente: if (num%2 != 0) {}
    let resto = num % 2;
    if (resto == 0) {
        return false;
    } else {
        return true;
    }
}


if (num1 < num2) {  // Contador ascendente

    for (let index = num1; index <= num2; index++) {
        if (es_impar(index)) {
            console.log(index);
        }
    }

} else if (num1 > num2) {   // Contador descendente

    for (let index = num1; index >=num2; index--) {
        if (es_impar(index)) {
            console.log(index);
        }
    }

} else if (num1 == num2) {  // Si los números son iguales

    console.log(`Los números son iguales: ${num1}`);

} else {    // Si no eran números

    console.log("Introduce números válidos");
}