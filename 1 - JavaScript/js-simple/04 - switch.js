'use string'

// Switch - estructura condicional organizada con casos controlados
const mayoria_edad = 18
const edad_jubilacion = 65
var edad = 65


function calculo_edad() {

    switch(edad) {
        case mayoria_edad:
            return "Mayoría de edad recién cumplida"
        break

        case edad_jubilacion:
            return "Recíen jubilado"
        break
    
        default:
            return "Edad neutra"
        break
    }
}

var imprime = calculo_edad(edad)

console.log(imprime)