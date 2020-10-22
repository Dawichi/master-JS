'use strict'

var express = require('express')
var ProjectController = require('../controllers/project')

var router = express.Router()

// Middleware - necesario para subir imagenes con multiparty
var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({ uploadDir: './uploads' })

router.post('/save-project', ProjectController.saveProject)
router.get('/project/:id?', ProjectController.getProject)
router.get('/projects', ProjectController.getProjects)
router.put('/project/:id', ProjectController.updateProject)
router.delete('/project/:id', ProjectController.deleteProject)
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage)

module.exports = router