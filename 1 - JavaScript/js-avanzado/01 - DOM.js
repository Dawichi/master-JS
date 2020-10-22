'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   DOM - Document Object Model
 *  |           
 *  |   Manipulación del HTML desde JS
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

// Seleccionar elementos por ID, 2 formas:
var mainBox = document.querySelector("#mainBox");  // Como en CSS: #ID, .class - preferible
var mainBox2 = document.getElementById("mainBox");   // Devuelve el código HTML

mainBox2.innerHTML = "Texto añadido al div mainBox desde JS"; // Añadir HTML

mainBox.style.background = "green";   //  Modificaciones del div con 
mainBox.style.padding = "20px";     //  código CSS desde JavaScript. 
mainBox.style.color = "black";      //  [div].style.[reglaCSS]

mainBox.className = "hola" // Añade la propiedad class=""

console.log(mainBox);


// Seleccionar elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div'); // Genera un array con todos los div

todosLosDiv[2].textContent = "Hola"; // Similar a .innerHTML
console.log(todosLosDiv);


for (var valor in todosLosDiv) {
    console.log(todosLosDiv[valor]);
    if (typeof todosLosDiv[valor].textContent == "string" ); {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#misection").prepend(parrafo); 
    } 
}


// Seleccionar elementos por su class
var divsRojos = document.getElementsByClassName('rojo');

for (var div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = "red";
    }
    
}


// Query selector
var id = document.querySelector('misection');
console.log(id);

var claseRojo = document.querySelector('div.rojo');
console.log(claseRojo);

var divs = document.querySelector('div');
console.log(divs);



// -------------------------------------------------------------------------------------

/* // HTML //

<body>
    <h1>Curso de JavaScript</h1>

    <button id="stop" style="color: black;">Stop</button>
    <button id="start" style="color: black;">Start</button>
    <button id="boton" style="color: black;">Presioname</button>
    <form action="">
        <input type="text" name="nombre" id="campoNombre">
    </form>

    <section id="misection"> <hr> </section>
    <p>Primer script en JS</p>
    <div id="mainBox">div con ID mainBox</div>
    <div class="azul">Primer div</div>
    <div class="rojo">Segundo div</div>
</body>

*/



