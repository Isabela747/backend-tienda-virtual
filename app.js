require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//Tipo de servidor que realizaremos
const http = require('http');
//Iniciar y configurar express
const app = express();
//Log mostrar informacion en consola
app.use(logger('dev'));
//Parsear las entradas de solicitud de datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Configurar las rutas de bienvenida al servidor
app.get('/',(req,res)=> res.status(200).send({
    message: 'Bienvenido a la API REST de compras.',
}))
//Cambiar el puerto
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
//Crear servidor basado en el puerto y caracteristicas de la app
const server = http.createServer(app);
server.listen(port);

module.exports = app;