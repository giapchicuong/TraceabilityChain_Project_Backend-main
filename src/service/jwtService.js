const db = require("../models/index");

const getGroupWithRoles = async (user) => {
  try {
    let roles = await db.Groups.findOne({
      where: { id: user.groupId },
      attributes: ["id", "name", "description"],
      include: {
        model: db.Roles,
        attributes: ["id", "url", "description"],
        through: { attributes: [] },
      },
    });
    return roles ? roles : {};
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getGroupWithRoles,
};
