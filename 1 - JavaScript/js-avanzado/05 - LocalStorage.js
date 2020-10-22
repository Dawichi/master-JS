'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Local Storage - Almacenamiento local en el navegador web
 *  | 
 *  +---------------------------------------------------------------------------------+
**/


if (typeof(Storage) !== 'undefined') { // Comprobar si el navegador es compatible
    console.log('LocalStorage disponible');
} else { console.log('LocalStorage no compatible con tu navegador'); }


// Almacenar datos
localStorage.setItem('titulo', 'curso JS');


// Recuperar elemento y añadirlo a la página
localStorage.getItem('titulo');


// Guardar un objeto JSON en LocalStorage
var usuario = { 
    nombre: 'David',
    email: 'patata@gmail.com',
    web: 'dawichi.ga'
};

/*  LocalStorage no permite almacenar un objeto JSON en ese formato puro, es necesario
    pasarlo a un string con: JSON.stringify() */
localStorage.setItem('usuario', JSON.stringify(usuario));


// Recuperar un objeto JSON del localStorage
/*  El JSON almacenado es ahora un string, para recuperarlo en formato JSON
    será necesario el uso de: JSON.parse() */

var userjson = JSON.parse(localStorage.getItem('usuario')); // Parsea/Convierte el string a JSON usable

console.log(userjson);


// Borar memoria
localStorage.removeItem('usuario'); // Elimina un registro concreto
localStorage.clear(); // Limpia toda la memoria

