'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_usuarios.init({
    nombre:{
       type:DataTypes.STRING(100),
       allowNull: false,
    },

    direccion:{
       type: DataTypes.STRING(150),
     allowNull: false,
    },
    
    password:{
       type:DataTypes.STRING(15),
       allowNull: false,
    },
       
    email: {
      type:DataTypes.STRING(120),
      allowNull: false,
    },
    telefono: {
      type:DataTypes.ENUM(225),
      allowNull: false,
    },
    rol: {
      tipe:DataTypes.STRING,
      allowNull: false
  }, 

   fecha_registro: {
      tipe:DataTypes.DATE,
      allowNull: false
  }, 

    sequelize,
    modelName: 'tbc_usuarios',
  });
  return tbc_usuarios;
};