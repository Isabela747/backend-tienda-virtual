const carritos_detalleController = require('../controllers/controller_carritos_detalle');

module.exports = (app) => {
    
    app.get('/api/carritos_detalle', carritos_detalleController.list);

    app.get('/api/carritos_detalle/:nombre', carritos_detalleController.find);

    app.post('/api/carritos_detalle/nombre/:nombre/', carritos_detalleController.create);

    app.put('/api/carritos_detalle/:id', carritos_detalleController.update);
    
    app.delete('/api/carritos_detalle/:id', carritos_detalleController.delate);



}