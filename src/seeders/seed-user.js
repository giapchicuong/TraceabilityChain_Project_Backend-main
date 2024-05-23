"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        // {
        //   email: "giapchicuong@gamil.com",
        //   password: "123",
        //   username: "giapchicuong",
        //   address: "HCM",
        //   phone: "0354438249",
        //   sex: 0,
        //   groupId: 2,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
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
