'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   JSON - JavaScript Object Notation
 *  |           
 *  |   Almacenamiento de datos en una estructura tipo yaml
 *  |   MongoDB almacena así los datos en sus DB
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

var pelicula = { // Objeto JSON
    title: 'Batman vs Superman',
    year: 2017,
    from: 'USA'
};

console.log(pelicula);  // Acceso al objeto
console.log(pelicula.year); // Acceso a una propiedad de ese objeto
pelicula.title = "Superman"; // Modificacion de una propiedad

// -------------------------------------------------------------------------------------

var peliculas = [ // Array de Objetos JSON
    {title: 'La verdad duele', year: 2016, from: 'France'}, // Objeto 1
    pelicula // Objeto 2, ya definido, pasado como variable
];

// -------------------------------------------------------------------------------------

window.addEventListener('load', function() { // Cargar HTML

    var box_peliculas = document.querySelector('#box_peliculas');
    var index;

    for (index in peliculas) {
        var p = document.createElement('p');
        p.append(peliculas[index].title + ' - ' + peliculas[index].year); // Impresión de propiedades de ese objeto
        box_peliculas.append(p);
    }

});