'use strict'

// Conexión a la base de datos MongoDB con Mongoose
var mongoose = require('mongoose')
var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => {
            console.log('Conexión con MongoDB establecida con éxito!')

            // Crear el servidor
            app.listen(port, () => {
                console.log('Servidor corriendo correctamente en la URL: localhost:' + port)
            })
        })
        .catch((error) => {
            console.log(error)
        })
