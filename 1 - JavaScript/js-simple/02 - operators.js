'use strict'

// Operadores
var num1 = 7
var num2 = 12

var suma = num1 + num2
var resta = num1 - num2
var multiplicacion = num1 * num2
var division = num1 / num2
var resto = num1 % num2

console.log(suma)

// Tipos de datos

var num_entero = 44        // Tipo entero
var texto = "curso js"     // Tipo string <*1>
var true_o_false = false   // Tipo boolean
var numero_falso = "12.5"  // Tipo string, siendo un número

console.log(typeof numero_falso); // Imprime el tipo de dato que es esa variable

Number(numero_falso) // Convierte un número tipo string a su tipo numérico 
parseInt(numero_falso) // Convierte el string a un número ENTERO
parseFloat(numero_falso) // Convierte el string a un número FLOAT

numero_falso = numero_falso.toString() // Convierte la variable a tipo string

String(numero_falso) // Convierte un entero o float a tipo string
/*
 * Ejemplo de uso:
 * var num = 5.1;
 * num + 5;  // Si no quieres sumar, si no concatenar
 * En vez de dar 10.1
 * Daría: 5.15  // 5.1+5
 */


/*  <*1>
 * Comillas dobles "" vs Comillas simples ''
 * Para imprimir comillas dentro del string, debemos alternarlas
 * = "Hola 'que' tal" -> Funciona imprimiento las comillas simples como string
 * = 'Hola 'que' tal' -> El <que> quedaría fuera del string
 * = 'Hola "que" tal' -> Funciona imprimiento las comillas dobles como string
**/