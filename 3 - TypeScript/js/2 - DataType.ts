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
let cadena: string = 'Cadena de texto'
// Number
let numero: number = 12
// Boolean
let true_false: boolean = true
// Any
let versatil: any = 'hola'

versatil = 12
versatil = false


// ------------------------------------------------------------------------------------- Arrays

/*
 *  Definición de arrays
 *  Si en el siguiente array se incluye un dato que no sea tipo string,
 *  el compilador dará un error.
 * 
 *  Ambas formas de declarar el array son válidas
**/

var lenguajes: Array<string> = ['PHP', 'C++', 'CSS', 'Java']
var lenguajes2: string[] = ['PHP', 'C++', 'CSS', 'Java']

var numeros: Array<number> = [1, 2, 3, 4]
var numeros2: number[] = [1, 2, 3, 4]


// ------------------------------------------------------------------------------------- DataType

/*
 *  Múltiples tipos de datos
**/

let numero_texto: number | string = 12
numero_texto = 'un texto'

/*  Si introducimos un boolean:
 *  Ej: numero_texto = false
 *  Eso sí daría un error
**/


/*
 *  Crear tipos de datos
 *
 *  Con 'type' se puede crear un tipo de dato que implique 2 distintos como alias
 *  y reutilizarlo luego en la creación de variables
**/
type Texto_Numeros = string | number

let texto_o_numeros: Texto_Numeros = 4
texto_o_numeros = 'un texto'
// boolean daría error 


// ------------------------------------------------------------------------------------- Functions

/*
 *  Methods on Functions on TS
**/

// La función recibe como parámetro un número y devuelve un string
function getNumber(number:number = 12):string {
    return 'El numero es: ' + number
}

console.log(getNumber(5))

