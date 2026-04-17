const db = require('../models');
const producto = db.tbb_productos;

module.exports = {

    create(req, res){
        return producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            id_categoria: req.body.id_categoria

        })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){
        return producto.findAll()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return producto.findByPk(req.params.id)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return producto.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({ message: "Producto eliminado correctamente" }))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return producto.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                stock: req.body.stock
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({ message: "Producto actualizado correctamente" }))
        .catch(error => res.status(400).send(error));
    }

};