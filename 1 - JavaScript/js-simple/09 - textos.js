'use strict'

/*
 *  Procesado de textos con JavaScript
**/

var num1 = 42;
var num2 = 78;
var text1 = "Hola, bienvenido";
var text2 = "Máster en JavaScript";

var dato = "";  // Iniciación de la variable que modificará los datos

// ------------------------------------------------------------

dato = num1.toString(); // Convierte el número a tipo string
dato = text1.toUpperCase(); // Pasa el texto a mayúsculas
dato = text2.toLowerCase(); // Pasa el texto a minúsculas

dato = text1.length;  // Return la longitud de la cadena de texto / nº de elementos de un array
// OJO: '.lengh' no es una función, es una propiedad, no lleva ().

dato = text1 + " " + text2; // Concatenación
dato = `${text1} ${text2}`; // Escritura alternativa, recomendada
dato = text1.concat(" " + text2);   // Método concat



// ------------------------------------------------------------

/*
 *  Métodos de búsqueda
**/

dato = text1.indexOf("bienvenido"); // Localiza texto, devuelve la posición
dato = text1.search("bienvenido"); // Casi igual que 'indexOf'
dato = text1.lastIndexOf("bienvenido"); // Localiza última coincidencia de ese texto
dato = text2.match("en"); // Devuelve en un array las posiciones de las coincidencias
dato = text1.substr(6, 10); // Saca el texto a partir del 6º caracter, los siguientes 10
dato = text1.charAt(12); // Saca el carácter hayado en cierta posición
dato = text1.startsWith("hola"); // Devuelve true/false si el texto EMPIEZA con esa cadena de texto
dato = text1.endsWith("hola"); // Devuelve true/false si el texto TERMINA con esa cadena de texto
dato = text1.includes("Hola"); // Devuelve true/false si encuentra el texto dado



// ------------------------------------------------------------

/*
 *  Métodos de reemplazo
**/

dato = text1.replace("Hola", "Adios"); // Reemplaza el texto del 1er parámetro por el del 2do
dato = text1.slice(2, 10); // Separa un string - devuelve el texto entre las 2 posiciones dadas
dato = text1.split(); // Ingresa el texto en un array
dato = text1.split(" "); // Ingresa el texto en un arrray separandolo en entradas con un " "
dato = text1.trim(); // Elimina los espacios al inicio y al final
// MUY util para cuando ingresamos nombres de usuarios, para eliminar esos espacios accidentales


console.log(dato);