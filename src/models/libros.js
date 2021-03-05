'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Libros.belongsToMany(models.Lectores, {
        as: 'LibrosPrestados',
        through: "Prestamos",
        foreignKey: "idLibro"
      }); 
    }
  };
  Libros.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    genero: DataTypes.STRING,
    isbn: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};