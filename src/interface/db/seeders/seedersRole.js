'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        id: 1,
        nama_role: 'Admin'
      },
      {
        id: 2,
        nama_role: 'Customer'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  }
};