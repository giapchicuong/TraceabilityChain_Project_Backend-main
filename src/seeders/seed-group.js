"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          name: "Admin",
          description: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Consumer",
          description: "Consumer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Retailer",
          description: "Retailer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Distributor",
          description: "Distributor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manufacturer",
          description: "Manufacturer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
