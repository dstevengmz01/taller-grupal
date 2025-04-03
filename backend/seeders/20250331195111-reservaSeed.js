"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "reservas",
      [
        {
          usuario_id: 1,
          fechaReserva: "2020-01-02",
          lugar: "Casa",
          nombreReserva: "El senor x",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          usuario_id: 1,
          fechaReserva: "2020-01-02",
          lugar: "Casa",
          nombreReserva: "El senor x",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservas", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
