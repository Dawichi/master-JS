'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   BOM - Browser Object Model
 *  |           
 *  |   Manipulación del navegador
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

console.log(window.innerHeight); // Altura de la ventana
console.log(window.innerWidth); // Anchura de la ventana
console.log(screen.height); // Altura de la pantalla
console.log(screen.width); // Altura de la pantalla

console.log(window.location); // Muchas propiedades, mirar la consola para verlas todas
console.log(window.location.href); // Acceso a una de ellas, concretamente la URL de la página

// Ejemplo de uso de 'window.location.href', redirección de URL
function redirigir(url) {
    window.location.href = url;
}

function nuevaPestaña(url) {
    //window.open(url); // Nueva pestaña normal
    window.open(url, "", "width=400, height=300"); // Nueva ventana pop up en otra ventana
}