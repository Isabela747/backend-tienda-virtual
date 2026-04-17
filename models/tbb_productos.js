'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class tbb_productos extends Model {
    static associate(models) {

      this.hasMany(models.tbb_carrito_detalle, {
        foreignKey: 'id_producto'
      });

    }
  }

  tbb_productos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbb_productos',
    tableName: 'tbb_productos',
    timestamps: true
  });

  return tbb_productos;
};