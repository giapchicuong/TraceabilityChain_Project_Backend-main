const db = require("../models/index");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const checkPassword = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword);
};

const checkEmailExist = async (userEmail) => {
  let user = await db.Users.findOne({
    where: { email: userEmail },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkPhoneExist = async (userPhone) => {
  let user = await db.Users.findOne({
    where: { phone: userPhone },
  });
  return user ? true : false;
};

const checkGroupNameExist = async (groupName) => {
  let group = await db.Groups.findOne({
    where: { name: groupName },
  });
  return group ? true : false;
};

module.exports = {
  hashUserPassword,
  checkPassword,
  checkEmailExist,
  checkPhoneExist,
  checkGroupNameExist,
};
