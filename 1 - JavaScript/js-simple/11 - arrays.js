'use strict'

/*
 *  Arrays, Arreglos, Matrices
**/
var nombre = "David Miguel";
var nombres = ["David Miguel", "Juan Lopez", "Manolo García", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C", "C#", "Pascal");

console.log(nombres);
console.log(lenguajes);

console.log(nombres.length); // Número de elementos del array

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if (elemento >= nombres.length) { // Si se introduce un índice mayor de los posibles

    alert(`Introduce un índice menor que ${nombres.length}`);

} else {

    alert(nombres[elemento]);
}



/*
 *  Recorrer un array mostrando los elementos - Con FOR
**/
for (let index = 0; index < lenguajes.length; index++) {
    const element = lenguajes[index];
    document.write(element + "<br>");
}



/*
 *  Recorrer un array mostrando los elementos - Con FOR EACH
**/
lenguajes.forEach((elemento) => {
    document.write(elemento + "<br>");
});


// Versión 2 más completa con acceso al índice; y al array en consola.
lenguajes.forEach((elemento, indice, array) => {
    console.log(array);
    document.write(`${indice} - ${elemento}<br>`)
});



/*
 *  Arrays múltiples - Arrays dentro de Arrays
**/
var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]); // Acceso a "Terror". Indice de array [0] = peliculas; 2º Indice [1]



/*
 *  Operaciones con arrays
**/
peliculas.push("Batman"); // Añade un elemento al array
console.log(peliculas);
peliculas.pop(); // Elimina el último elemento de un array
console.log(peliculas);

// Eliminar un elemento concreto de un array
function borrarElementoIndice(peliculaParaBorrar) {
    var indice = peliculas.indexOf(peliculaParaBorrar);

    if (indice > -1) { // Si es > -1, es que sí lo ha encontrado

        peliculas.splice(indice);
    }
}

borrarElementoIndice("La vida es bella 2");

// Convertir un array a texto
var peliculas_string = peliculas.join();
console.log(peliculas_string);


/*
 *  Ordenar arrays
**/
peliculas.sort(); // Ordena alfabéticamente
peliculas.reverse(); // Invierte el orden



/*
 *  Recorrer array con - for in
**/
for (let lenguaje in lenguajes) {

    console.log(lenguajes[lenguaje]);
}



/*
 *  Búsquedas en un array
**/
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
// Ambos códigos son equivalentes. Abajo está reducido con la función de flecha

var busquedaIndex = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
// En vez de devolver el texto, devuelve el índice



/*
 *  Método .some() en arrays numéricos
**/
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio >= 80);
// Devuelve true si existe algún valor coincidente ( >=80 )
console.log(busqueda);
