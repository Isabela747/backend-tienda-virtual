const db = require('../models');
const carrito_detalle = db.tbb_carrito_detalle;

module.exports = {

    create(req, res){
        return carrito_detalle.create({
            id_carrito: req.body.id_carrito,
            id_producto: req.body.id_producto,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario
        })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        return carrito_detalle.findAll()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return carrito_detalle.findByPk(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return carrito_detalle.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({ message: "Detalle eliminado correctamente" }))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return carrito_detalle.update(
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