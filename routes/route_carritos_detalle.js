const carritos_detalleController = require('../controllers/controller_carritos_detalle');

module.exports = (app) => {
    
    app.get('/api/carritos-detalle', carritos_detalleController.list);

    app.get('/api/carritos-detalle/:id', carritos_detalleController.find);

    app.post('/api/carritos-detalle', carritos_detalleController.create);

    app.put('/api/carritos-detalle/:id', carritos_detalleController.update);
    
    app.delete('/api/carritos-detalle/:id', carritos_detalleController.delete);



}