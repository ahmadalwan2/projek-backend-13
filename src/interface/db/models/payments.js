'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payments.belongsTo(models.Booking, {
        foreignKey:"bookingId",
        as:"booking"
      })
    }
  }
  Payments.init({
          id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      bookingId: {
        type: DataTypes.INTEGER,
        references :{
          model:"booking",
          key:"id"
        }
      },
      jumlah: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.ENUM("belumBayar", "setengahBayar", "lunas"),
        allowNull:false,
        defaultValue:"belumBayar"
      },
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};