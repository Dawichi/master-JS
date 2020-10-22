'use strict'

var Project = require('../models/project')
var fs = require('fs')

var controller = {

    saveProject: function(req, res){
        let project = new Project()
        let params = req.body

        project.name = params.name
        project.description = params.description
        project.category = params.category
        project.tecnology = params.tecnology
        project.year = params.year
        project.image = null

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el proyecto.'})
            if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'})
            return res.status(200).send({project: projectStored})
        })
    },

    getProject: function(req, res){
        let projectID = req.params.id
        if (projectID == null) return res.status(404).send({message: 'El proyecto no existe.'})
            
        Project.findById(projectID, (err, project) => {
            if(err) return res.status(500).send({message: 'Error al cargar los datos.'})
            if(!project) return res.status(404).send({message: 'El proyecto no existe.'})
            return res.status(200).send({project})
        })
    },

    getProjects: function(req, res){
        Project.find({}).sort('-year').exec((err, projects) => {
            if(err) return res.status(500).send({message: 'Error al cargar los datos'})
            if(!projects) return res.status(404).send({message: 'No hay proyectos.'})
            return res.status(200).send({projects})
        })
    },

    updateProject: function(req, res){
        let projectID = req.params.id
        let update = req.body

        Project.findByIdAndUpdate(projectID, update, {new:true}, (err, projectUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar los datos'})
            if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe.'})
            return res.status(200).send({project: projectUpdated})
        })
    },

    deleteProject: function(req, res){
        let projectID = req.params.id

        Project.findByIdAndDelete(projectID, (err, projectDeleted) => {
            if(err) return res.status(500).send({message: 'Error al eliminar los datos'})
            if(!projectDeleted) return res.status(404).send({message: 'El proyecto no existe.'})
            return res.status(200).send({project: projectDeleted})
        })
    },

    uploadImage: function(req, res){
        let projectID = req.params.id
        let fileName = 'Imagen no subida...'

        if(req.files){
            let filePath = req.files.image.path
            let fileSplit = filePath.split('\\')
            let fileName = fileSplit[1]
            let extSplit = fileName.split('\.')
            let fileExt = extSplit[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                
                Project.findByIdAndUpdate(projectID, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if(err) return res.status(500).send({message: 'Error al subir la imagen.'})
                    if(!projectUpdated) return res.status(404).send('El proyecto no existe.')
                    return res.status(200).send({project: projectUpdated})
                })

            } else {

                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: 'La extensión no es válida. Sólo se admiten archivos: .png .jpg .jpeg .gif'})
                })

            }         
            
        } else {
            return res.status(200).send({message: fileName})
        }
    }
}

module.exports = controller