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
      Libros.hasMany(models.Prestamos, {
        foreignKey: "idLibro",
      });
    }
  };
  Libros.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    genero: DataTypes.STRING,
    prestado: DataTypes.BOOLEAN,
    isbn: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};