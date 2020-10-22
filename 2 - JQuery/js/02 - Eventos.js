/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Eventos de JS desde JQuery
 *  | 
 *  +---------------------------------------------------------------------------------+
**/

function FondoRojo(){
    $(this).css('background', 'red');
}

function FondoAmarillo(){
    $(this).css('background', 'yellow');
}

// -------------------------------------------------------------------------------------

$(document).ready(function() {
    console.log('JQuery cargado');

    // MouseOver y MouseOut
    var box = $('#box');

    box.mouseover(FondoRojo);
    box.mouseout(FondoAmarillo);


    // Hover - Como lo anterior pero más sencillo
    var box2 = $('#box2');

    box2.hover(FondoRojo, FondoAmarillo);


    // Click y DobleClick
    box.click(function(){
        $(this).css('background', 'green')
               .css('font-size', '20px');
    });

    box.dblclick(function(){
        $(this).css('background', 'blue')
               .css('font-size', '15px');
    });

    
    // Focus y Blur
    var nombre = $('#nombre');

    nombre.focus(function() {
        $(this).css('background', 'green');
    });

    nombre.blur(function() {
        $(this).css('background', 'red');
    });


    // Mousedown y mouseup
    box2.mousedown(function() {
        $(this).css('background', 'orange');
    });
    box2.mouseup(function() {
        $(this).css('background', 'blue');
    });


    // MouseMove
    $(document).mousemove(function(){
        console.log('Eje X - Eje Y : ' + event.clientX + ' - ' + event.clientY);

        $('body').css('cursor', 'none');
        $('#follower').css('left', event.clientX)
                      .css('top', event.clientY);
    });



});



// -------------------------------------------------------------------------------------

/* // HTML //

<style>
    .box {
        float: left;
        width: 250px;
        height: 250px;
        border: 1px solid black;
        background: #ccc;
        transition: 300ms all;
    }
    form {
        margin: 20px;
    }
    #follower {
        width: 25px;
        height: 25px;
        position: absolute;
        display: block;
        background: yellow;
        opacity: 0.3;
        border:  1px solid black;
        border-radius: 999px;
    }
</style>

<body>
    <h1>Eventos</h1>
    <div id="follower">

    </div>

    <form action="#">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre">
    </form>

    <div id="box" class="box">
        <p>Caja principal</p>
    </div>

    <div id="box2" class="box">
        <p>Caja secundaria</p> 
    </div>
</body>

*/