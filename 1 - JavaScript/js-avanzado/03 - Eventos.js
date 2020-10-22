'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Eventos en JS - Eventos del ratón y el teclado
 *  |           
 *  |   Detección y uso de los eventos con JS
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

function cambiarColor() { // Propiedad HTML onclick=""
    if (boton.style.background == 'green') {
        boton.style.background = 'red';
    } else {
        boton.style.background = 'green';
    }
}

function Agrandar() { // Propiedad HTML ondblclick=""
    boton.style.padding = "10px";
}

// -------------------------------------------------------------------------------------

window.addEventListener('load', function() { // Cargar HTML

    var boton = document.querySelector("#boton");

    // Click
    boton.addEventListener('click', function() {
        cambiarColor();
        /*
        *  Operador THIS - hace referencia al elemento en el que se está
        *  en este caso, 'boton' = 'this'
        **/
        this.style.border = '5px solid black';
    });

    // Mouse Over
    boton.addEventListener('mouseover', function() {
        boton.style.background = "blue";
    });

    // Mouse Out
    boton.addEventListener('mouseout', function() {
        boton.style.background = "orange";
    });

    // -------------------------------------------------------------------------------------

    /*  +---------------------------------------------------------------------------------+
     *  |   
     *  |   Eventos del teclado
     *  |            
     *  +---------------------------------------------------------------------------------+
    **/
    var input = document.querySelector('#campoNombre');

    // Focus
    input.addEventListener('focus', function() {
        console.log("focus - Estás dentro del input");
    })

    // Blur
    input.addEventListener('blur', function() {
        console.log("blur - Estás fuera del input");
    })

    // Keydown
    input.addEventListener('keydown', function(evento) {
        console.log("keydown - Estás pulsando la tecla: ", String.fromCharCode(evento.keyCode));
    })

    // Keypress
    input.addEventListener('keypress', function(evento) {
    console.log("keypress - Has pulsado la tecla: ", String.fromCharCode(evento.keyCode));
    })

    // Keyup
    input.addEventListener('keyup', function(evento) {
    console.log("keyup - Has soltado la tecla: ", String.fromCharCode(evento.keyCode));
    })

    // -------------------------------------------------------------------------------------

    /*  +---------------------------------------------------------------------------------+
     *  |   
     *  |   Timers
     *  |        
     *  |   1. setInterval - Ejecuta el código de la función callback 
     *  |   cada vez que termina el tiempo del 2º parámetro, en bucle.
     *  |
     *  |   2. setTimeout - Ejecuta el código de la función callback sólo 1 vez, 
     *  |   cuando termina el tiempo del 2º parámetro.
     *  |
     *  +---------------------------------------------------------------------------------+
    **/

    function intervalo() {

        var tiempo = setInterval(function() {
            
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        
        }, 2000); // Cada 3000 ms (3s) ejecuta el contenido
        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function() {
        alert("Bucle parado");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
    start.addEventListener("click", function() {
        alert("Bucle iniciado");
        intervalo();
    });

    
}); // Cargado HTML



// -------------------------------------------------------------------------------------

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Cargar el HTML antes de ejecutar el JS
 *  |           
 *  |   El JS emplazado en el head puede dar error si aún no está cargado elementos HTML usados
 *  |   Para solucionarlo, ejecutar el código JS que dé errores, dentro de la siguiente estructura:
 *  |
 *  +---------------------------------------------------------------------------------+
**/

window.addEventListener('load', () => {

    // Place code here

})



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
</body>

*/