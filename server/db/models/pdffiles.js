'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PdfFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PdfFiles.init({
    filename: DataTypes.STRING,
    allowNull: false,
    filepath: DataTypes.STRING,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'PdfFiles',
  });
  return PdfFiles;
};