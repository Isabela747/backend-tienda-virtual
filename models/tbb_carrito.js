'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class tbb_carrito extends Model {
    static associate(models) {

      this.belongsTo(models.tbc_usuarios, {
        foreignKey: 'id_usuario',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      this.hasMany(models.tbb_carrito_detalle, {
        foreignKey: 'id_carrito',
        as: 'detalle'
      });

    }
  }

  tbb_carrito.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito',
    tableName: 'tbb_carrito',
    timestamps: true
  });

  return tbb_carrito;
};