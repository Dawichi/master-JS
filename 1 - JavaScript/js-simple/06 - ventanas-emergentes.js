'use strict'

// Alertas
alert("hola");


// Confirmaciones
var respuesta = confirm("Segudo que quieres continuar?");   // confirm() devuelve true o false según conteste el usuario

console.log(respuesta);


// Ingreso de datos
var resultado = prompt("Que edad tienes?", 18);     // %a = pregunta, %b = valor por defecto.   Siempre devuelve un string!

resultado = parseInt(resultado);  // hacer la edad tipo int
console.log(resultado);
console.log(typeof resultado);