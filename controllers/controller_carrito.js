const Sequelize = require('sequelize')
const db = require ('../models');
const carrito = db.tbb_carrito;

module.exports = {
 create(req, res){
    return carrito
    .create({
        id_usuario: req.body.id_usuario,
        estado: req.body.estado,
        fecha_creacion: new Date(),
        total: req.body.total || 0
    })
    .then(carrito => res.status(200).send(carrito))
    .catch(error => res.status(400).send(error))
 },
 list(_,res){
    return carrito.findAll({})
    .then(carrito => res.status(200).send(carrito))
    .catch(error => res.status(400).send(error))
 },
 find(req, res){
    return carrito.findByPk(req.params.id)
    .then(carrito => res.status(200).send(carrito))
    .catch(error => res.status(400).send(error))
 },
 delete(req, res){
    return carrito.destroy({
        where :{ id: req.params.id
        }
    })
    .then(carrito => res.status(200).send({message: "Carrito eliminado correctamente"}))
    .catch(error => res.status(400).send(error))
 },
 update(req, res){
    return carrito.update(
        {
            estado: req.body.estado,
            total: req.body.total
        },
        {
            where:{
                id:req.params.id

            }
        }
        
    )
    .then(() => res.status(200).send({message: "Carrito actualizado correctamente"}))
    .catch(error => res.status(400).send(error))
 }
};