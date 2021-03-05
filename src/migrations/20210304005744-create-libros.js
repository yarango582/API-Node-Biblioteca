'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Prestamos",
          key: "idLibro"
        }
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      autor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('Libros');
  }
};