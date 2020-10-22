'use strict'

/*
 * Funciones
**/

function calcular(num1, num2, mostrar = false) {

    if(mostrar == false)
        console.log(num1 + num2);
    else
        document.write(num1 + num2);
}

// num1 : parámetro obligatorio
// num2 : parámetro obligatorio
// mostrar : parámetro opcional, tiene un valor por defecto

calcular(34, 7)
calcular(2, 34, true)



// --------------------------------------------------------------------------


/*
 *  Parámetro REST
**/

function listFrutas(fruta1, fruta2, ...todasFrutas) {   // Esos 3 puntos son REST. Si le pasan más de los 3 parámetros contemplados, los incluye en un array "todasFrutas"
    console.log("Fruta 1: ", fruta1)
    console.log("Fruta 2: ", fruta2)
    console.log(todasFrutas)
}

listFrutas("Naranja", "Sandía", "Manzana", "Pera", "Melocoton", "Coco")

/*
 *  Parámetro SPREAD
**/

var frutas = ["Naranja", "Sandía"] // Generamos una variable con los primeros 2 parámetros

listFrutas(frutas, "Manzana", "Pera", "Melocoton", "Coco") // Realizamos la misma llamada que antes pero sustituyendo los 2 parámetros por su variable array

// Eso, imprimirá un array como 'fruta1', Manzana como 'fruta2' y el resto en el array de 'todasFrutas'
// Para separar el primer array de 'frutas' en los parámetros fruta1 y fruta2, se hace un SPREAD

listFrutas(...frutas, "Manzana", "Pera", "Melocoton", "Coco")  // Con esos 3 puntos, separa el contenido del array en distintos parámetros



// --------------------------------------------------------------------------


/*
 *  Funciones anónimas
 *  Funciones que no tienen nombre
**/
const titulo = "Interestellar"

var pelicula = function(nombre) {
    return "La pelicula es: " + nombre;
}

console.log(pelicula(titulo));  //Función anónima
 


// --------------------------------------------------------------------------


/*
 *  CALLBACK
 *  Una función dentro de otra
 * 
 * La función sumame llaman a 2 funciones anónimas que se le pasan como parámetros en la llamada
**/

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    let suma = num1 + num2

    sumaYmuestra(suma)
    sumaPorDos(suma)

    return suma
}

sumame(5, 7, function(dato) {
    console.log("La suma es: ", dato)
    
},
function(dato) {
    console.log("La suma por dos es: ", (dato * 2))
})



// --------------------------------------------------------------------------

/*
 *  Funciones de flecha - CALLBACK sin el término function()
*/

sumame(5, 7, dato => {    //Escritura alternativa del código anterior
    console.log("La suma es: ", dato)
    
},
dato => { //Escritura alternativa del código anterior
    console.log("La suma por dos es: ", (dato * 2))
})