'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Ejercicio - Local Storage, añadir y borrar películas de una lista
 *  | 
 *  +---------------------------------------------------------------------------------+
**/


window.addEventListener('load', function() { // Cargar HTML

    // Formulario para añadir películas
    var formulario = document.querySelector('#form_peliculas');

    formulario.addEventListener('submit', function(){   

        var titulo = document.querySelector('#addpelicula').value;
        if (titulo.length >= 1){ localStorage.setItem(titulo, titulo); }
    });


    // Formulario para borrar películas
    var borrar = document.querySelector('#form_del_peliculas');

    borrar.addEventListener('submit', function(){
        
        var titulo = document.querySelector('#del_pelicula').value;
        if (titulo.length >= 1){ localStorage.removeItem(titulo); }
    });


    // Listar las películas
    var ul = document.querySelector('#list_peliculas');

    for (var index in localStorage) {
        
        if (typeof(localStorage[index]) == 'string') {
            var li = document.createElement('li');
            li.append(localStorage[index]);
            ul.append(li);
        }
    }


});



// -------------------------------------------------------------------------------------

/*  // HTML //

<body>
    <h1>Añade tu película</h1>
    <form action="" id="form_peliculas">
        <input type="text" id="addpelicula">
        <button type="submit">Guardar</button>
    </form>

    <h2>Películas</h2>
    <div id="box_peliculas">
       <ul id="list_peliculas">

        </ul>
    </div>

    <h1>Borra tu película</h1>
    <form action="" id="form_del_peliculas">
        <input type="text" id="del_pelicula">
        <button type="submit">Borrar</button>
    </form>
</body>

*/