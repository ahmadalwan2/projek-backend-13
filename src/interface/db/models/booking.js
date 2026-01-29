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
      Booking.hasMany(models.Payment, {
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
    tgl_booking: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};