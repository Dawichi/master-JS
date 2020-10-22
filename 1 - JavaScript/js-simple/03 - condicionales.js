'use strict'

const mayoria_edad = 18
var edad = 50

/* Condicional IF - Operadores relacionales
 *      Mayor: >
 *      Menor: <
 *      Mayor o igual: >=
 *      Menor o igual: <=
 *      Igual: ==           // Usando solo 1 (a=b) machaca el dato
 *      Distinto: !=
**/
if (edad >= mayoria_edad) {
    console.log("Es mayor de edad porque tiene " + edad +" años")

    if (edad < 30)
        console.log("Muy joven")
    else if(edad >= 65)
        console.log("Jubilado")
    else
        console.log("Estás entre los 30 y los 65")
} else
    console.log("Es menor de edad")

/*
 * Operadores lógicos
 *      AND: &&
 *      OR: ||
 *      NOT: !
**/

var year = 2020

if (year >= 2000 && year < 3000) {
    console.log("siglo XXI")

    if (year == 2020)
        console.log("año del covid19")

} else
console.log("no es el siglo XXI")