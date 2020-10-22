/*  +---------------------------------------------------------------------------------+
 *  |
 *  |   TypeScript es un lenguaje de tipado fuerte
 *  |   requiere marcar los tipos de datos en las variables creadas
 *  |
 *  |   Al compilarse a JS, aunque machaquemos variables con tipos de datos que no debemos,
 *  |   funcionará, ya que en JS sí se admite. Pero el compilador nos avisará de ese error,
 *  |   permitiendo solucionarlo, mantener una estructura de variables más íntegra y que
 *  |   no genere errores a la larga.
 *  |
 *  +---------------------------------------------------------------------------------+
**/
// String
var cadena = 'Cadena de texto';
// Number
var numero = 12;
// Boolean
var true_false = true;
// Any
var versatil = 'hola';
versatil = 12;
versatil = false;
// ------------------------------------------------------------------------------------- Arrays
/*
 *  Definición de arrays
 *  Si en el siguiente array se incluye un dato que no sea tipo string,
 *  el compilador dará un error.
 *
 *  Ambas formas de declarar el array son válidas
**/
var lenguajes = ['PHP', 'C++', 'CSS', 'Java'];
var lenguajes2 = ['PHP', 'C++', 'CSS', 'Java'];
var numeros = [1, 2, 3, 4];
var numeros2 = [1, 2, 3, 4];
// ------------------------------------------------------------------------------------- DataType
/*
 *  Múltiples tipos de datos
**/
var numero_texto = 12;
numero_texto = 'un texto';
var texto_o_numeros = 4;
texto_o_numeros = 'un texto';
// boolean daría error 
// ------------------------------------------------------------------------------------- Functions
/*
 *  Methods on Functions on TS
**/
// La función recibe como parámetro un número y devuelve un string
function getNumber(number) {
    if (number === void 0) { number = 12; }
    return 'El numero es: ' + number;
}
console.log(getNumber(5));
