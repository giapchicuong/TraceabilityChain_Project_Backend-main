const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const {
  checkUserJwt,
  checkUserPermission,
} = require("../middleware/JWTAction");
const loginRegisterController = require("../controller/loginRegisterController");
const groupController = require("../controller/groupController");
const roleController = require("../controller/roleController");
const blogController = require("../controller/blogController");

const initApiRoutes = (app) => {
  router.all("*", checkUserJwt, checkUserPermission);
  router.post("/register", loginRegisterController.handleRegister);
  router.post("/login", loginRegisterController.handleLogin);
  router.post("/logout", loginRegisterController.handleLogout);
  router.get("/account", userController.getUserAccount);

  // Users
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // Groups
  router.get("/group/read", groupController.readFunc);
  router.post("/group/create", groupController.createFunc);
  router.put("/group/update", groupController.updateFunc);
  router.delete("/group/delete", groupController.deleteFunc);

  // Roles
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.readRoleByGroup);
  router.post("/role/assign-to-group", roleController.handleAssignRoleToGroup);

  // Blogs
  router.get("/blog/read", blogController.readFunc);
  router.post("/blog/create", blogController.createFunc);
  router.put("/blog/update", blogController.updateFunc);
  router.delete("/blog/delete", blogController.deleteFunc);

  return app.use("/api/v1/", router);
};

module.exports = initApiRoutes;
