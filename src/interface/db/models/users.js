'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Roles, {
        foreignKey: "roleId",
        as:"role"
      })
    }
  }
  Users.init({
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING(50),
        unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      roleId: {
        type: DataTypes.INTEGER,
          references:{
          model:"role",
          key:"id"
        }
      },
  }, {
    sequelize,
    modelName: 'Users',
    tableName:"user"
  });
  return Users;
};