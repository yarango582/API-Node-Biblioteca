'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lectores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Prestamos',
          key: 'idLectores'
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      cc: {
        type: Sequelize.BIGINT
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lectores');
  }
};