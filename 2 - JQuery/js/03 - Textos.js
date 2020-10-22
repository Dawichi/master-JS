/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Manipulación de Textos desde JQuery
 *  | 
 *  +---------------------------------------------------------------------------------+
**/
function reloadLinks() {
    // Recargar los links del nav
    $('a').each(function(index) {     
        var that = $(this);
        let enlace = that.attr('href');
        
        that.attr('target', '_blank'); // Añadir un atributo
        //that.removeAttr('target'); // Quitar un atributo

        that.text(enlace);
    });
}


// -------------------------------------------------------------------------------------

$(document).ready(function() {
    
    reloadLinks();

    $('#add_button').click(function() {
        let add_input = $('#add_input');

        $('#nav').append('<a href="' + add_input.val() + '"></a><br>'); // O prepend() para antes
        add_input.val(''); // Vaciar el input
        
        reloadLinks();
    }); 


    
});



// -------------------------------------------------------------------------------------

/* // HTML //

<body>
    <h1>Textos en JQuery</h1>
    <h3>Añadir enlaces:</h3>
    <input type="text" name="add" id="add_input">
    <button id="add_button">Añadir</button>
    <nav id="nav">
        <a href="https://google.com"></a><br>
        <a href="https://facebook.com"></a><br>
        <a href="https://github.com"></a><br>
    </nav>
</body>

*/