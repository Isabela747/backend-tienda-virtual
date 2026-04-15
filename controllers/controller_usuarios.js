const db = require('../models');
const usuario = db.tbc_usuarios;

module.exports = {

    create(req, res){
        return usuario.create({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol,
            fecha_registro: req.body.fecha_registro
        })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        return usuario.findAll()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return usuario.findByPk(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return usuario.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({ message: "Usuario eliminado correctamente" }))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return usuario.update(
            {
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                password: req.body.password,
                rol: req.body.rol
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({ message: "Usuario actualizado correctamente" }))
        .catch(error => res.status(400).send(error));
    }

};