'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:"user",
          key:"id"
        }
      },
        carId: {
        type: Sequelize.INTEGER,
        references:{
          model:"car",
          key:"id"
        }
      },
      tgl_booking: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("pending", "confirmed", "cancelled"),
        allowNull:false,
        defaultValue:"pending"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
         defaultValue:Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
         defaultValue:Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking');
  }
};