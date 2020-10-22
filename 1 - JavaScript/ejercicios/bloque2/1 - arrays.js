'use strict'

/*
 *  1. Programa que pida 6 números por pantalla y los meta en un array
 *  2. Mostrar todos los elementos del array en el cuerpo de la página y en la consola
 *  3. Ordenarlo alf. y mostrarlo de nuevo
 *  4. Invertir su orden y mostrarlo de nuevo
 *  5. Mostrar el número de elementos del array
 *  6. Buscar un valor introducido por el usuario y que nos confirme si está o no, y su índice
 *  NOTE: Se valorará el uso de funciones
**/

// 1. Programa que pida 6 números por pantalla y los meta en un array
var nums_array = askNum();

// 2. Mostrar todos los elementos del array en el cuerpo de la página y en la consola
MostrarArray(nums_array);

// 3. Ordenarlo alf. y mostrarlo de nuevo
MostrarSort(nums_array);

// 4. Invertir su orden y mostrarlo de nuevo
MostrarReverse(nums_array);

// 5. Mostrar el número de elementos del array
console.log(nums_array.length);
document.write(`Número de elementos del array: ${nums_array.length} <br/>`);

// 6. Buscar un valor introducido por el usuario y que nos confirme si está o no, y su índice
askValor(nums_array);



// Funciones - normalmente iría en un archivo a parte

function askNum() {
    // Pregunta 6 números, repitiendo la pregunta si se introdujo un número incorrecto. Devuelve un array con los 6
    let answer = new Array(6);

    for (let index = 0; index <= 5; index++) {    

        let num = parseInt(prompt(`Introduzca el número ${index}:`, 0));
        while (isNaN(num)) { num = parseInt(prompt(`Introduzca el número ${index}:`, 0));}

        answer[index] = num;
    }
    return answer;
}

/*      Versión alternativa al FOR de askNum()
var numeros = [];
for (let i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt(`Introduce el número ${i}`, 0)));
}   */


function MostrarArray(MostrarArray) { 
    // Muestra todos los elementos del array en el documento y en consola
    MostrarArray.forEach((element, index, array) => {
        console.log(array);
        document.write(`${index} - ${element} <br/>`);
    });
    document.write("---------------------------------------------<br>");
}

function MostrarSort(MostrarSort) {
    // Muestra todos los elementos del array en el documento y en consola ordenados alfabeticamente
    MostrarSort.sort().forEach((element, index, array) => {
        console.log(array);
        document.write(`${index} - ${element} <br/>`);
    });
    document.write("---------------------------------------------<br>");
}

function MostrarReverse(MostrarReverse) {
    // Muestra todos los elementos del array en el documento y en consola en orden inverso
    MostrarReverse.reverse().forEach((element, index, array) => {
        console.log(array);
        document.write(`${index} - ${element} <br/>`);
    });
    document.write("---------------------------------------------<br>");
}

function askValor(askValor) {
    // Pide un número al usuario y comprueba si está en el array
    let num = parseInt(prompt("Número a buscar:", 0));
    let busqueda = askValor.find(numero => numero == num);

    if (busqueda) {
        console.log(busqueda + " Numero encontrado");
        document.write(`El número ${num} ha sido encontrado`);

        let busquedaIndex = askValor.findIndex(numero => numero == num);
        console.log(busquedaIndex);
        document.write(`Su índice es ${busquedaIndex}`);

    }
    else {

        console.log(busqueda + " Numero no encontrado");
        document.write(`El número ${num} no ha sido encontrado`);
    }
}