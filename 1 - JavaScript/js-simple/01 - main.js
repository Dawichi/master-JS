/*
 *  MODO ESTRICTO - Activa nuevas funcionalidades y se vuelve más estricto en la sintaxis.
 * 
 *  Ej: Sin el modo estricto, podrían definirse variables sin 'var'
 *  numero = 12;  y  var numero = 12;   - Ambos serían válidos
**/
'use strict'


/*
 *  VARIABLES
**/

var nombre = "David"
var pais = "España"
var año = 2020
var nombre_pais = `${nombre} ${pais}`

console.log(nombre_pais)

/*
 *  VARIABLES con LET y VAR
 *  var - define variables globales
 *  let - define variables locales a ese bloque de código
**/

// PRUEBA CON VAR
var numero = 40
console.log(numero) // valor 40

if (true){
    var numero = 50
    console.log(numero) // valor 50
}

console.log(numero) // valor 50

// PRUEBA CON LET - Al estar definido dentro del if, no sobreescribe "var texto"

var texto = "Curso JS"
console.log(texto);

if (true){
    let texto = "Curso laravel 5"
    console.log(texto)
}

console.log(texto) // "Curso JS" o "Curso laravel 5"? La primera


/*
 *  CONSTANTES - Contenido invariable
**/

const ip_centos = "178.32.232.195"
const ip_ubuntu = "178.32.232.211"