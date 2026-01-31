'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cars.hasMany(models.Booking, {
        foreignKey:"carId",
        as:"bookings"
      })
    }
  }
  Cars.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_mobil: {
        type: DataTypes.STRING,
        allowNull:false
      },
      harga_sewa: {
        type: DataTypes.INTEGER,
      },
      foto_mobil: {
        type: DataTypes.STRING,
        allowNull:false
      },
  }, {
    sequelize,
    modelName: 'Cars',
    tableName:"car"
  });
  return Cars;
};