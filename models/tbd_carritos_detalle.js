'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbd_carritos_detalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación con carrito - ON DELETE CASCADE
      this.belongsTo(models.tbb_carrito, {
        foreignKey: 'id_carrito',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
      // Relación con producto - ON DELETE CASCADE
      this.belongsTo(models.tbb_productos, {
        foreignKey: 'id_producto',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  tbd_carritos_detalle.init({
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tbd_carritos_detalle',
  });
  return tbd_carritos_detalle;
};