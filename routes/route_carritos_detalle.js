const carrito_detalleController = require('../controllers/controller_carrito_detalle');

module.exports = (app) => {
    
    app.get('/api/carrito-detalle', carrito_detalleController.list);

    app.get('/api/carrito-detalle/:id', carrito_detalleController.find);

    app.post('/api/carrito-detalle', carrito_detalleController.create);

    app.put('/api/carrito-detalle/:id', carrito_detalleController.update);
    
    app.delete('/api/carrito-detalle/:id', carrito_detalleController.delete);



}