'use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Fetch (ajax) y peticiones a servicios/apis REST       
 *  |   
 *  |   Fake Online REST API for Testing:
 *  |   1. jsonplaceholder.typicode.com/
 *  |   2. reqres.in/
 *  |
 *  |   Atención en getUsers() - Se encadenan promesas para evitar
 *  |   meter un fetch dentro de otro en bucle, de esa forma cuando
 *  |   se termina de ejecutar uno, pasa al siguiente, así hasta cumplir los 3
 *  |
 *  |   En getInfo() se ha establecido un timeout de 3s para apreciar
 *  |   que primero se ejecuta uno y luego los otros detrás
 *  |   
 *  +---------------------------------------------------------------------------------+
**/

window.addEventListener('load', function() { // Cargar HTML

    var div_usuarios = document.querySelector('#usuarios');
    var div_profesor = document.querySelector('#profesor');
    var div_janet = document.querySelector('#janet');

    document.querySelector('.loading').style.display = 'block';

    
    getUsers()
        .then(data => data.json())
        .then(users => {
            listUsers(users.data);
            return getInfo();
        })
        .then(data => {
            div_profesor.innerHTML = data;
            return getJanet();
        })
        .then(data => data.json())
        .then(janet => {
            showJanet(janet.data);
        })
        .catch(error => { // Excepción en caso de fallar las peticione. Ej: sin internet, mala URL
            console.log(error);
            alert('Error en la petición fetch');
        });



    function getUsers(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){
        var profesor = {
            nombre: 'David',
            apellidos: 'Robles',
            url: 'https://github.com/dawichi'
        }
        
        return new Promise((resolve, reject) => {        
            var profesor_string = "";
            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);

                if (typeof profesor_string != 'string' || profesor_string == '') {
                    return reject('error');
                }
                return resolve(profesor_string);
            }, 3000);
        });    
    }

    function listUsers(usuarios) {
        usuarios.map((user, index) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = index + ' - ' + user.first_name + ' - ' + user.last_name;
            div_usuarios.appendChild(nombre);
            document.querySelector('.loading').style.display = 'none';
        });
    }

    function showJanet(user) {
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + ' - ' + user.last_name;
        avatar.src = user.avatar;
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector('#janet .loading').style.display = 'none';
    }




});

/*  // HTML //

    <body>
        <h1>Fetch</h1>
        <h2>Listado de usuarios</h2>
        <div id="usuarios">
            <span class="loading">Cargando datos...</span>
        </div>
        <hr>
        <div id="profesor">
            <span class="loading">Cargando profesor...</span>
        </div>
        <hr>
        <div id="janet">
            <span class="loading">Cargando usuario...</span>
        </div>
    </body>

*/