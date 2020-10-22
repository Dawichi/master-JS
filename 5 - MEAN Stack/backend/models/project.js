'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = Schema({
    
    name: String,
    description: String,
    category: String,
    tecnology: String,
    year: Number,
    image: String
})

module.exports = mongoose.model('Project', ProjectSchema)
/*
    Mongoose almacena en MongoDB 'Project' en minúsculas y pluralizado

    Por lo que generará la colección 'projects'
    Si ya existe (que es el caso), guarda los documetnos en la colección y listo
*/