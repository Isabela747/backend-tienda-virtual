const db = require('../models');
const carritos_detalle = db.tbd_carritos_detalle;

module.exports = {

    //Crear detalle del carrito
    create(req, res){
        return carritos_detalle.create({
            id_carrito: req.body.id_carrito,
            id_producto: req.body.id_producto,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario
        })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    //Listar todos
    list(req, res){
        return carritos_detalle.findAll()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    //Buscar por id
    find(req, res){
        return carritos_detalle.findByPk(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    //Eliminar
    delete(req, res){
        return carritos_detalle.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({ message: "Detalle eliminado correctamente" }))
        .catch(error => res.status(400).send(error));
    },

    //Actualizar
    update(req, res){
        return carritos_detalle.update(
            {
                cantidad: req.body.cantidad,
                precio_unitario: req.body.precio_unitario
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({ message: "Detalle actualizado correctamente" }))
        .catch(error => res.status(400).send(error));
    }

};