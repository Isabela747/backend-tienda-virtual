'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class tbc_usuarios extends Model {
    static associate(models) {
      this.hasMany(models.tbb_carrito, {
        foreignKey: 'id_usuario',
        as: 'tbb_carrito'
      });
    }
  }

  tbc_usuarios.init(
    {
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      direccion: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },

      telefono: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      rol: {
        type: DataTypes.STRING,
        allowNull: false
      },

      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW

      },
    },
    {
      sequelize,
      modelName: 'tbc_usuarios',
      tableName: 'tbc_usuarios',
      timestamps: false
    }
  );

  return tbc_usuarios;
};