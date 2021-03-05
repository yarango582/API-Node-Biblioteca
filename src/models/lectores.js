'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lectores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lectores.hasMany(models.Prestamos, {
        foreignKey: "idLector"
      });
    }
  };
  Lectores.init({
    nombre: DataTypes.STRING,
    cc: DataTypes.BIGINT,
    direccion: DataTypes.STRING,
    telefono: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Lectores',
  });
  return Lectores;
};