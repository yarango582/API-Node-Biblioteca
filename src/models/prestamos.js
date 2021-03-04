'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prestamos.belongsTo(models.Lectores);
      Prestamos.belongsTo(models.Libros);
      
    }
  };
  Prestamos.init({
    fechaPrestamo: DataTypes.DATE,
    idLIbro: DataTypes.INTEGER,
    idLector: DataTypes.INTEGER,
    fechaDevolucion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Prestamos',
  });
  return Prestamos;
};