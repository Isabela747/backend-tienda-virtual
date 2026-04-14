const productosController = require('../controllers/controller_productos');

module.exports = (app) => {
    
    app.get('/api/productos', productosController.list);
    app.get('/api/productos/:nombre', productosController.find);
    app.post('/api/productos/nombre/:nombre/', productosController.create);
    app.put('/api/productos/:id', productosController.update);
    app.delete('/api/productos/:id', productosController.delate);



}