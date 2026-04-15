const categoriaController = require('../controllers/controller_categorias');

module.exports = (app) => {
    
    app.get('/api/categorias', categoriaController.list);
    app.get('/api/categorias/:nombre', categoriaController.find);
    app.post('/api/categorias/nombre/:nombre/', categoriaController.create);
    app.put('/api/categorias/:id', categoriaController.update);
    app.delete('/api/categorias/:id', categoriaController.delete);



}