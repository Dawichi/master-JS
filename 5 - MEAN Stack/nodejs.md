# NodeJS - JavaScript en el servidor

* Primeros pasos
* Conexión a la BD
* Crear servidor
* Postman
* Modelos de datos
* MVC - Modelo Vista Controlador
* Controladores y rutas
* Subir archivos al servidor
* Front-end con Angular conectado al backend


# Uso de Node

1. Instalar Node.js en el equipo
2. Situarnos en el directorio de nuestro proyecto
3. Iniciar un proyecto NodeJS con `npm init`. Ejemplo de respuestas:
```
{
  "name": "api-rest-nodejs",
  "version": "1.0.0",
  "description": "Api Rest del Master de JS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "David Miguel Fajardo Oubiña",
  "license": "MIT"
}
```
4. Instalar dependencias de NodeJS:
    * ExpressJS: `npm install express --save`
    * BodyParser: `npm install body-parser --save`
    * ConnectMultiparty: `npm install connect-multiparty --save`
    * Mongoose: `npm install mongoose --save`
    * Nodemon: `npm install nodemon --save-dev`

5. Iniciar el servidor NodeJS: npm start