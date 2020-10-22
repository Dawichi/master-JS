'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Fechas en Java Script
 *  |
 *  |   Mediante el objeto new Date(), tenemos acceso a
 *  |   múltiples propiedades relacionadas con las fechas
 *  | 
 *  +---------------------------------------------------------------------------------+
 */

// Objeto de fecha
var fecha = new Date(); 

// Propiedades (hay muchas más)
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundo = fecha.getSeconds();

// Imprimir los datos
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${hora}
    El minuto es: ${minuto}
    El segundo es: ${segundo}
`;

console.log(textoHora);


/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Matemáticas en Java Script
 *  |
 *  |   Objeto Math con muchas propiedades accesibles para
 *  |   realizar operaciones matemáticas diversas
 *  |
 *  |   Consultar: https://www.w3schools.com/js/js_math.asp
 *  | 
 *  +---------------------------------------------------------------------------------+
 */

// Número aleatorio de 4 cifras sin decimales
console.log(Math.ceil(Math.random()*10000));