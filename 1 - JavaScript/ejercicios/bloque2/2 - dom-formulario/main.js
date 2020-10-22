'use strict'

window.addEventListener('load', function(){

    // Def formulario y caja donde visualizar los datos
    var formulario = document.querySelector("#form");
    var box = document.querySelector("#boxR2");

    box.style.display = 'none'; // Dejar la caja oculta


    formulario.addEventListener('submit', function(){
        
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

         // Validación del nombre
        if (nombre.trim() == null || nombre.trim().length == 0){
            alert('Nombre - no es válido');
            document.querySelector('#error_nombre').innerHTML = "El nombre no es válido";
            return false
        } else { document.querySelector('#error_nombre').style.display = 'none'; }

         // Validación de los apellidos
        if (apellidos.trim() == null || apellidos.trim().length == 0){
            alert('Apellidos - no es válido');
            document.querySelector('#error_apellidos').innerHTML = "Los apellidos no son válidos";
            return false;
        } else { document.querySelector('#error_apellidos').style.display = 'none'; }

         // Validación de la edad
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert('Edad - no es válido');
            document.querySelector('#error_edad').innerHTML = "La edad no es válida";
            return false;
        } else { document.querySelector('#error_edad').style.display = 'none'; }

       
        // Mostrar la caja de datos, definir los span donde se muestran y rellenarlos con las variables
        box.style.display = 'block'; // Mostrar
        
        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
   
    }); // Formulario




















});