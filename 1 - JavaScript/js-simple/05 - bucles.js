'use strict'

/*
 *  BUCLE - FOR
**/
var num1 = 10

for (let index = 0; index <= 10; index++) {
    
    console.log(`Numero for: ${index}`)

    //debugger;     // Permite analizar paso a paso cada interacción desde la consola
}


/*
 *  BUCLE - WHILE
**/
var num2 = 0

while(num2 <= 10 ) {
    console.log(`Numero while: ${num2}`)
    num2++
}

while(num2 >= 0 ) {
    console.log(`Numero while 2: ${num2}`)
    num2--
}

/*
 *  BUCLE - DO WHILE
**/

var num3 = 20

do {
    console.log(`La variable num3 vale: ${num3}`)
    console.log("El bucle se detendrá cuando llegue a 0")
    num3--
} while (num3 >= 0 )


/*
 *  USO DE BRAKE EN LOS BUCLES
 *  con <brake;> puedes salir de una estructura de control
**/