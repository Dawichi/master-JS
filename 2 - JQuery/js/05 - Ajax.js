/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Ajax en JQuery
 *  | 
 *  +---------------------------------------------------------------------------------+
**/


// -------------------------------------------------------------------------------------

$(document).ready(function() {

    // Load
    //$('#data').load('https://reqres.in/');


    // GET
    $.get('https://reqres.in/api/users', {page: 2}, function(response) {
        response.data.forEach((element, index) => {
            $('#data').append('<p>' + element.first_name + ' ' + element.last_name + '</p>')
        })
    })


    // POST
    $('#form').submit(function(){
        var user = {
            name: $('input[name="name"').val(),
            web: $('input[name="web"').val()
        }
        /*
        $.post($(this).attr('action'), user, function(response){
            console.log(response)
        }).done(function(){
            alert('Usuario añadido correctamente')
        })
        */

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: user,
            beforeSend: function(){
                console.log('Enviando usuario...')
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log('Ha ocurrido un error')
            },
            timeout: 2000
        })
        return false
    })

})


// -------------------------------------------------------------------------------------

/*  // HTML //

<style>
    #data {
        border: 1px solid black;
        border-radius: 10px;
        width: 500px;
        height: 500px;
        overflow: scroll;
    }
</style>

<body>
    <h1>Ajax en JQuery</h1>
    <form action="https://reqres.in/api/users" method="POST" id="form">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" />
            
        <label for="web">Web: </label>
        <input type="text" name="web" id="web" />

        <input type="submit" value="Registrar">
    </form><br>
        
    <div id="data">

    </div>
</body>
*/
