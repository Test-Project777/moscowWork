'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacansy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Vacansy.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      image: DataTypes.TEXT,
      company: DataTypes.STRING,
      info: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      format: DataTypes.STRING,
      education: DataTypes.STRING,
      expireance: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Vacansy',
    },
  );
  return Vacansy;
};
