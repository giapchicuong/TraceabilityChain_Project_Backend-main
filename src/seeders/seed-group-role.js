"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Group_Roles",
      [
        {
          groupId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 1,
          roleId: 18,
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
