/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Efectos visuales desde JQuery
 *  | 
 *  |   Ocultar: Animación de 'recogerse' el div
 *  |       .hide()     .show()         .toggle()
 *  |        
 *  |   Desvanecer: Animación de 'desvanecerse' el div
 *  |       .fadeOut()  .fadeIn()       .fadeToggle()
 *  |
 *  |   Deslizar: Un slide hacia arriba
 *  |       .slideUp()  .slideDown()    .slideToggle()
 *  |
 *  |   Parámetros:    'normal', 'fast',  '200ms'
 *  |
 *  +---------------------------------------------------------------------------------+
**/





// -------------------------------------------------------------------------------------

$(document).ready(function() {
    
    var show_button = $('#show_button');
    var hide_button = $('#hide_button');
    var box1 = $('#box2');
    var box2 = $('#box');
    var box3 = $('#box3');

    show_button.show('fast');
    hide_button.hide('fast');
    box1.hide('fast');
    box2.fadeOut('fast');

    // Mostrar al hacer click
    show_button.click(function() {
        box1.show('fast');
        box2.fadeIn('fast');
        $(this).hide();
        hide_button.show(); 
    });

    // Esconder al hacer click
    hide_button.click(function() {
        box1.hide('fast');
        box2.fadeOut('fast');
        $(this).hide();
        show_button.show();
    });



    /*
     *  Animación personalizada
    **/
    $('#animation').click(function() {
        box3.animate({
                padding: '100px'  
            }, 'slow')
            .animate({
                height: '150px',
                borderRadius: '999px'
            }, 'slow')
            .animate({
                padding: '0px',
                height: '100px'
            }, 'slow')
            .animate({
                borderRadius: '0px'
            }, 'slow');
    });

    
});



/*
 *  Ejecutar código al terminar una animación
 *  -----------------------------------------------
 * 
 *  1. En vez de:  
 *      box.fadeOut('slow');
 * 
 *  2. Se utiliza como segundo parámetro una función callback:
 *      box.fadeOut('slow', function(){
 *          // código a ejecutar tras terminar la animación de fadeOut
 *      });
 * 
**/



// -------------------------------------------------------------------------------------

/* // HTML //

<style>
    #box , #box2, #box3 {
        width: 300px;
        height: 100px;
        border: 1px dashed black;
        margin: 20px;
        text-align: center;
    } 
</style>

<body>
    <h1>Efectos en JQuery</h1>
    <button id="show_button">Mostrar</button>
    <button id="hide_button">Ocultar</button>
    <button id="animation">Animado</button>
    <div id="box">
        <p>Master en JS</p>
    </div>

    <div id="box2">
        <p>Master en JS 2</p>
    </div>

    <div id="box3">
        <p>Master en JS 3</p>
    </div>
</body>

*/