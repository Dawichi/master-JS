/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   JQuery UI
 *  |
 *  |   Interfaces y animaciones con divs
 *  | 
 *  +---------------------------------------------------------------------------------+
**/


// -------------------------------------------------------------------------------------

$(document).ready(function() {

    // Arrastrable
    $('.el').draggable()

    // Redimensionable
    $('.el').resizable()

    // Seleccionable
    $('.lista').selectable()

    // Ordenable - (no funciona con 'selectable()' activado)
    $('.lista').sortable({
        update: function(event, ui){
            console.log('Ha cambiado el orden')
        }
    })

    // Droppable
    $('#movable').draggable()
    $('#area').droppable({
        drop: function(){
            console.log("elemento soltado en el área")
        }
    })

    // Efectos
    $('#mostrar').click(function(){
        $('.caja-efectos').toggle('fade')
    })

    // Tooltip
    $(document).tooltip()

    // Dialog
    $('#lanzar-dialog').click(function(){
        $('#popup').dialog()
    })
    
    // Date picker
    $('#calendar').datepicker()

    // Tabs
    $('#tabs').tabs()
})