const usuariosController = require('../controllers/controller_usuarios');

module.exports = (app) => {
    
    app.get('/api/usuarios', usuariosController.list);
    app.get('/api/usuarios/:nombre', usuariosController.find);
    app.post('/api/usuarios/nombre/:nombre/', usuariosController.create);
    app.put('/api/usuarios/:id', usuariosController.update);
    app.delete('/api/usuarios/:id', usuariosController.delete);



}