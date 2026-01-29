'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasMany(models.User, {
        foreignKey:"roleId",
        as:"users"
      })
    }
  }
  Roles.init({
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_role: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
  }, {
    sequelize,
    modelName: 'Roles',
    tableName:"role"
  });
  return Roles;
};