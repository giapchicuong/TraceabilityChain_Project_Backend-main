"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roles",
      [
        // USER
        {
          url: "/user/read",
          description: "get all user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/user/create",
          description: "create new user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/user/update",
          description: "update user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/user/delete",
          description: "delete user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // GROUPS
        {
          url: "/group/read",
          description: "get all group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/group/create",
          description: "create new group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/group/update",
          description: "update group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/group/delete",
          description: "delete group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ROLES
        {
          url: "/role/read",
          description: "get all role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/role/create",
          description: "create new role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/role/update",
          description: "update role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/role/delete",
          description: "delete role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // GET ROLE BY GROUP
        {
          url: "/role/by-group",
          description: "Get roles by group role",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // ASSIGN ROLE TO GROUP
        {
          url: "/role/assign-to-group",
          description: "Assign role to group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // GROUPS
        {
          url: "/blog/read",
          description: "get all blog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/blog/create",
          description: "create new blog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/blog/update",
          description: "update blog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "/blog/delete",
          description: "delete blog",
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
