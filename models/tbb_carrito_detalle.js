'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class tbb_carrito_detalle extends Model {
    static associate(models) {

      this.belongsTo(models.tbb_carrito, {
        foreignKey: 'id_carrito'
      });

      this.belongsTo(models.tbb_productos, {
        foreignKey: 'id_producto',
        as: 'producto'
      });

    }
  }

  tbb_carrito_detalle.init({
    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio_unitario: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito_detalle',
    tableName: 'tbb_carrito_detalle',
    timestamps: true
  });

  return tbb_carrito_detalle;
};