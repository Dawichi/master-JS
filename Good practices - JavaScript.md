# Good practices - JavaScript

JavaScript es un lenguaje débilmente tipado y que nos brinda **mucha libertad** a la hora de trabajar, esto es algo que a la larga se puede volver contraproducente, por ello **es importante seguir unas buenas prácticas**.



### 1. Extract code to functions

````js
/* Takea a num, add +1 and return the result | Example: num = 5 */

// Without function
const num = 5
console.log( num + 1 )

// With function
const num = 5
const result = ( num ) => {
    return num + 1
}

// With function in global scope
const num = 5
function sum(base) {
   return base + 1
}
sum(5)
````



### **Reducir la dependencia del HTML con JavaScript**

Desde nuestros archivos HTML podemos hacer llamadas directas a funciones en JavaScript como, por ejemplo:

```
<button type="button" onclick="ejecutarFuncion()" id="botonClick">Clic!</button> 
```

Y aunque es algo totalmente válido **es una forma de aumentar nuestras dependencias**, ya que nuestro HTML dependerá de nuestro JavaScript, por lo que es interesante no llamar a las funciones desde el HTML si no seleccionarlas desde JS directamente y programar el evento, como, por ejemplo:

```
// Seleccionamos el botón desde JavaScript
var boton = document.getElementById('botonClick');

// Le añadimos el evento (en este caso el click)
boton.addEventListener('click', function(){
    // Aquí tu función al hacer click
});
```

De esta manera conseguimos eliminar dependencias innecesarias de nuestro proyecto.

### **Eliminación de código innecesario**

En JavaScript como en otros tantos lenguajes de programación nos encontramos ante la peculiaridad de que cuando utilizamos una estructura de control en la que **solo ejecutamos una instrucción en ella**, podemos prescindir del uso de llaves { } para encapsular nuestro código en ella, por ejemplo:

```
if (numero > 5 )
   console.log('Esta instrucción se ejecuta dentro del if');
```

Es importante tener en cuenta que **solo se ejecutará la primera instrucción** y el resto quedará fuera de la estructura, por ejemplo:

```
if (numero > 5 )
   console.log('Esta instrucción se ejecuta dentro del if');
   console.log('Esta instrucción se ejecuta FUERA del if');
```

## **Mejoras en el rendimiento del código**

### **Evita cálculos en estructuras iterativas**

Cuando trabajamos con estructuras iterativas (for, while, etc..), **si esta necesita de un cálculo en su estructura, deberíamos de realizarlo antes**, evitando así la repetición del cálculo en cada iteración.

**Ejemplo con calculo en estructura iterativa:**

```js
var numeros = [1, 2, 3, 4, 5];

for(i = 0; i < numeros.length; i++){
   console.log(numeros[i]);
}
```

**Ejemplo con calculo fuera de la entructura iterativa:**

```js
var numeros = [1, 2, 3, 4, 5];
var numeroDeElementos = numeros.length;

for(i = 0; i < numeroDeElementos; i++){
   console.log(numeros[i]);
}
```

De esta segunda forma evitamos repetir el cálculo del número de elementos en cada iteración del bucle, algo que, aunque en un ejemplo tan pequeño sea insignificante, en grandes cantidades de datos cobra mayor importancia.

### Estructuras Try Catch

Cuando utilizamos estructuras try catch junto con estructuras iterativas también debemos cuidar un pequeño detalle, que, aunque es funcional de ambas formas, una no ofrece mayor rendimiento que la otra.

```
for(i = 0; i < numeroDeElementos; i++){
  try{
   console.log(numeros[i]);
  } catch(error) {
   console.log(error);
  }
}
```

En este ejemplo con un for, tratamos de imprimir por consola los números y en caso de producirse algún error lo cazaríamos con el catch.

El problema aquí viene dado porque **en cada iteración del bucle creamos una nueva instancia de try catch**, aumentando con ello la carga del sistema.

La alternativa seria invertir el orden, es decir incluiríamos nuestro for **DENTRO** del try y no a la inversa, ejemplo:

```
try{

  for(i = 0; i < numeroDeElementos; i++){
    console.log(numeros[i]);
   }

} catch(error) {
  console.log(error);
}
```

De esta forma **solo necesitaríamos utilizar try catch una vez** y no una por cada iteración.

### **Realiza pruebas de rendimiento**

Si tenemos dudas sobre de que forma podemos dividir el trabajo en bloques de acción y hacer unas sencillas pruebas para comprobar de que forma tenemos una resolución más eficiente iniciando un contador con **console.time( ‘contador’ )** y finalizándolo con **console.timeEnd(‘contador’**).

```
console.time( 'contador' );

  try{

    for(i = 0; i < numeroDeElementos; i++){
      console.log(numeros[i]);
     }

  } catch(error) {
    console.log(error);
  }

console.timeEnd('contador'); 
```

De esta forma la consola nos mostrara el tiempo transcurrido desde el inicio de nuestro contador hasta el final de éste para así poder controlar la forma más eficiente de resolverlo.

Hay que tener en cuenta que **existen diferencias entre los resultados de distintos navegadores debido a su propio motor de renderización**, por lo que al realizar estas pruebas debemos comprobar los resultados con el mismo navegador.

### Minimiza tu código de JavaScript

Los caracteres en blanco, saltos de línea, etc., son caracteres que **el sistema debe interpretar de igual manera que los demás caracteres**, por lo que unas buenas prácticas en JavaScript incluyen minificar nuestros archivos y eliminar estos caracteres especiales, es otra manera de agilizar nuestro proyecto.

Si estamos utilizando algún framework de desarrollo probablemente ya incorpore algún software para minificar los archivos y así aumentar el rendimiento, pero de no ser así, también podemos hacer uso de estas características. Para ello podemos utilizar **herramientas gratuitas** que podemos encontrar en internet como por ejemplo [https://jscompress.com](https://jscompress.com/) o [https://javascript-minifier.com ](https://javascript-minifier.com/).

Nuestro código minificado lo podemos incluir como cualquier archivo JavaScript, ya que **debe funcionar exactamente igual a nuestro código sin minificar**, solo que excluye los caracteres innecesarios para la ejecución de nuestro programa.

### Conclusión

Si bien nos encontramos ante un lenguaje que que cada vez nos ofrece más posibilidades, es fácil si no seguimos unas buenas prácticas en JavaScript, unas buenas normas y estándares que nuestro código acabe convirtiéndose en un pesado manuscrito difícil de leer, así que **trata de ser lo más claro posible en tu código y seguir unas buenas pautas y convenciones** que tanto la gente que vea tu código en un futuro, como tú mismo agradecerán, y aunque éstas son solo algunas de ellas, si conoces más no dudes en dejarlo en los comentarios!





































