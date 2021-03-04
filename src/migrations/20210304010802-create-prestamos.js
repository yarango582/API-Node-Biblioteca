'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prestamos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaPrestamo: {
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
      idLIbro: {
        type: Sequelize.INTEGER,
        references: {
          model: "Libros",
          key: "id"
        }
      },
      idLector: {
        type: Sequelize.INTEGER,
        references: {
          model: "Lectores",
          key: "id"
        }
      },
      fechaDevolucion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Prestamos');
  }
};