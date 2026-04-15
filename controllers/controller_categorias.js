const db = require('../models');
const categoria = db.tbc_categorias;

module.exports = {

  create(req, res) {
    return categoria
      .create({
        nombreCategoria: req.body.nombreCategoria
      })
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },

  list(_, res) {
    return categoria
      .findAll()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },

  find(req, res) {
    return categoria
      .findByPk(req.params.id)
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return categoria
      .destroy({ where: { id: req.params.id } })
      .then(() =>
        res.status(200).send({ message: "Categoria eliminada correctamente" })
      )
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return categoria
      .update(
        { nombreCategoria: req.body.nombreCategoria },
        { where: { id: req.params.id } }
      )
      .then(() =>
        res.status(200).send({ message: "Categoria actualizada correctamente" })
      )
      .catch(error => res.status(400).send(error));
  }
};