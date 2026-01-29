'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.hasMany(models.Payments, {
        foreignKey:"bookingId",
        as:"payments"
      })
      Booking.belongsTo(models.Cars, {
        foreignKey:"carId",
        as:"car"
      })
      Booking.belongsTo(models.Users, {
        foreignKey:"userId",
        as:"user"
      })
    }
  }
  Booking.init({
         id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        references:{
          model:"user",
          key:"id"
        }
      },
        carId: {
        type: DataTypes.INTEGER,
        references:{
          model:"car",
          key:"id"
        }
      },
      tgl_booking: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
        allowNull:false,
        defaultValue:"pending"
      }, 
  }, {
    sequelize,
    modelName: 'Booking',
    tableName:"booking"
  });
  return Booking;
};