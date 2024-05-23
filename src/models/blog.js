"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blogs.belongsToMany(models.Users, {
        through: "Blog_Users",
        foreignKey: "blogId",
      });
    }
  }
  Blogs.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      typeBlog: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blogs",
    }
  );
  return Blogs;
};
