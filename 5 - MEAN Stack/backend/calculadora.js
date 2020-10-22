'use strict'

var params = process.argv.slice(2) // slice(2) para ignorar el primer parámetro, que es la ruta del archivo

var num1 = parseFloat(params[0])
var num2 = parseFloat(params[1])

var plantilla = `
    La suma es: ${num1 + num2}
    La resta es: ${num1 - num2}
    La multiplicación es: ${num1 * num2}
    La división es: ${num1 / num2}
`
console.log(plantilla)