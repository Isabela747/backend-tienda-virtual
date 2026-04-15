require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// 🔥 IMPORTAR TODAS LAS RUTAS
const carritoRoutes = require('./routes/route_carrito');
const categoriasRoutes = require('./routes/route_categorias');
const productosRoutes = require('./routes/route_productos');
const usuariosRoutes = require('./routes/route_usuarios');
const carritoDetalleRoutes = require('./routes/route_carritos_detalle');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta principal
app.get('/', (req, res) => res.status(200).send({
    message: 'Bienvenido a la API REST de compras.',
}));

// 🔥 CONECTAR TODAS LAS RUTAS
carritoRoutes(app);
categoriasRoutes(app);
productosRoutes(app);
usuariosRoutes(app);
carritoDetalleRoutes(app);

// Puerto
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`¡Servidor encendido correctamente!`);
    console.log(`http://localhost:${port}`);
});

module.exports = app;