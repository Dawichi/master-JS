/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Selectores del DOM desde JQuery
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

// El objeto jQuery se puede abreviar con el símbolo $ | jQuery() = $()
jQuery(document).ready(function() {
    console.log('JQuery cargado');
})

$(document).ready(function() {

    // Selector de ID + Método CSS 
    var rojo = $('#p_red').css('background', 'red')
                          .css('color', 'white');

    var amarillo = $('#p_yellow').css('background', 'yellow')
                                 .css('color', 'black');
    
    var verde = $('#p_green').css('background', 'green')
                             .css('color', 'white');

    var azul = $('#p_blue').css('background', 'blue')
                             .css('color', 'black');
    

    // Selector de class + CSS
    var border = $('.border');
    var no_border = $('.no_border');
    
    border.css('padding', '10px')
         .css('border', '3px solid black');


    // Evento Click
    no_border.click(function() {
        $(this).css('padding', '10px')
               .css('border', '3px solid black');
    });
    

    // Selectores por etiqueta
    var parrafos = $('p');

    // Selectores por atributo
    $('[title=Google]').css('background', '#ccc');
    $('[title=Facebook]').css('background', 'purple');

    // Otros - seleccionar varias cosas
    $('p, a').addClass('margen');


    // -------------------------------------------------------------------------------------


    /* Encontrar cosas en una estructura HTML, en este caso, 
     * los elementos con la clase .resaltado dentro del div #box
    **/
     var busqueda = $('#box').find('.resaltado');
    console.log(busqueda);


    // Escalar a un directorio durante la búsqueda ( equivale a ../ ) -> .parent()
    $('#box').parent().find('busqueda');


});


// -------------------------------------------------------------------------------------

/* // HTML //

<style>
    .margen {
        margin: 20px;
    }
    .resaltado {
        border: 1px solid red;
    }
</style>

<body>
    <h1>Aprendiendo JQuery</h1>
    <ul>
        <li><a href="https://google.com" title="Google">Google</a></li>
        <li><a href="https://facebook.com" title="Facebook">Facebook</a></li>
        <li><a href="https://github.com" title="GitHub">GitHub</a></li>
    </ul>

    <p id="p_red" class="border">Ejercicios de JQuery</p>
    <p id="p_yellow" class="border">Práctica con selectores</p>
    <p id="p_green" class="no_border">Párrafo verde</p>
    <p id="p_blue" class="no_border">Párrafo blanco</p>

    <div id="box">
        <p>Caja principal</p>
        <ul>
            <li>Elemento 1</li>
            <li class="resaltado">Elemento 2</li>
            <li class="resaltado">Elemento 3</li>
        </ul>
        <span class="resaltado">Texto fuera de la lista pero la misma clase</span>
    </div>
</body>
*/