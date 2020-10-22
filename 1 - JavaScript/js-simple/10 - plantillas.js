'use strict'

/*
 *  Plantillas de texto
**/

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

var texto = `
    <h2>Mi nombre es ${nombre}</h2><br>
    <h2>Y mis apellidos son ${apellidos}</h2><br>
`;

document.write(texto);