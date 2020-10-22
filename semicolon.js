/*
Transcripción del artículo: https://medium.com/@davidjsmoreno/desmitificando-el-uso-del-punto-y-coma-en-javascript-c6bd69fe4e04

Mito 1 “El punto y coma es requerido en todo momento”
Mito 2 “No necesitas punto y coma en ningún lugar.”

El punto y coma o semicolon (;) es uno de esos temas muy susceptibles a flame wars 🔥 debido a que está ligado a las preferencias de código del desarrollador o de un equipo de desarrollo (así como tabs vs espacios, comillas simples vs dobles, Vim vs Emacs, entre otros).
*/

// Este código es perfectamente Javascript válido:
const bar = 'bar'
let foo = 'baz'

const bazzz = 'baaarrr',
      fooos = 'baaam'

function hello(world) {
  let greeting = 'Hello '
  
  if (world) 
    greeting += world
  else 
    greeting += 'world'

  return greeting
}

// Lo anterior es equivalente a escribir:

const bar = 'bar';
let foo = 'baz';

const bazzz = 'baaarrr';
const fooos = 'baaam';

function hello(world) {
  let greeting = 'Hello ';
  
  if (world) {
    greeting += world;
  } 
  else {
    greeting += 'world';
  }

  return greeting;
}

// -----------------------------------------------------------------------------------------------------

/*
    Esto gracias al 'Automatic Semicolon Insertion' (ASI)

    Es el Automatic Semicolon Insertion (ASI), inserción automática de punto y coma, un mecanismo por el cual (como su nombre indica) Javascript insertará un punto y coma donde haga sentido hacerlo, como en el ejemplo anterior.

    Está activado por defecto y siempre está activo, es parte del lenguaje y no puede ser desactivado o removido total o parcialmente. 
    Pero hay excepciones, que nos lleva al segundo mito.
    -----------------------------------------------------------------------------

    “No necesitas punto y coma en ningún lugar.”
    Un salto de linea (\n) termina una declaración cuando:

    1.La declaración tiene un paréntesis no cerrado, un array literal o un objeto literal o termina de alguna otra manera que no es una forma válida de finalizar una declaración. (Por ejemplo, terminando con punto o coma.).

    2. La línea es — o ++ (en cuyo caso disminuirá / incrementará el siguiente token).

    3. Es un for (), while (), do, if (), o else, y no hay llaves {}

    4. La siguiente línea comienza con [, (, +, *, /, -, coma, punto , o algún otro operador binario que solo se puede encontrar entre dos tokens en una sola expresión.
*/



const foo = 100
const bar = 20

// La línea es  -  o ++ (en cuyo caso disminuirá / incrementará el siguiente token).
bar
++
foo
/*
La intención es que se interptete así
bar++;
foo;
Pero el ASI detecta el salto de linea luego del bar y el resultado será este:
bar;
++foo;
Ahora, ¿quién en su sano juicio escribiría algo así? 🤬
*/

// La siguiente línea comienza con [, (, +, *, /, -, coma, punto , o algún otro
// operador binario que solo se puede encontrar entre dos tokens en una sola expresión.
console.log('Este código dispara un error debido al ASI')
['🥩', '🌭', '🥧'].map(food => {
  return '💩'
})

/*
Lo anterior se interpreta asi:
console.log('Este código dispara un error debido al ASI')['🥩', '🌭', '🥧'].map(food => {
  return '💩'
})
*/

// Mejor

const foo = 100
const bar = 20

// 4.La siguiente línea comienza con [, (, +, *, /, -, coma, punto , o algún otro
// operador binario que solo se puede encontrar entre dos tokens en una sola expresión.
console.log(`
 Punto y coma "defensivo" para indicar 
 que la declaración anterior termina
`)
;['🥩', '🌭', '🥧'].map((food) => {
  return '💩'
})

// O aún mejor si eres de la escuela "nada de punto y coma"

const foo = 100
const bar = 20
const foods = ['🥩', '🌭', '🥧']

// 4.La siguiente línea comienza con [, (, +, *, /, -, coma, punto , o algún otro
// operador binario que solo se puede encontrar entre dos tokens en una sola expresión.
console.log('¡Mejor que mejor!')
foods.map(food) => {
  return '💩'
})


// -----------------------------------------------------------------------------------------------------

/*
    Conclusión

    Olvídate de la guerra de punto y coma o no, lo que deben importarte son dos cosas: conocer el ASI (visto en este articulo, yeeeeiii) y el principio de consistencia.

    ¿Tu proyecto se va por punto y coma requerido porque están usando SQL y quieren disminuir el context switching?, ¿o prefieren no usarlo para nada porque les parece que el código se ve más limpio?, ambas razones son validas pero cualquiera que elijas: apégate a ello, ayúdate con linters, code formatter, code review, pero hazlo.

    Lo que no debes dejar es caer en el miedo que alguien te diga que un estilo es superior a otro ya que al final termina siendo un asunto de preferencia, usar punto y coma no hará tu código más “seguro” contra el ASI y no usarlo no hará tu código “superior” a los que si lo usan.

*/