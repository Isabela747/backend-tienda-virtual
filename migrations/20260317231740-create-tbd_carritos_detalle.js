'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_carrito_detalle', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_carrito: {
        type: Sequelize.INTEGER,
        allowNull: false,
         references: {
          model: 'tbb_carrito',
          key:'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
        

      },
      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
         references: {
          model: 'tbb_productos',
          key:'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'







      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precio_unitario: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tbb_carrito_detalle');
  }
};