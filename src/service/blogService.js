const db = require("../models/index");

const getAllBlog = async () => {
  try {
    let blogs = await db.Blogs.findAll({
      attributes: [
        "id",
        "name",
        "description",
        "typeBlog",
        "updatedAt",
        "image",
      ],
    });
    if (blogs) {
      return {
        EM: "Get blog success",
        EC: 0,
        DT: blogs,
      };
    } else {
      return {
        EM: "Get blog fail",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const getBlogById = async (id) => {
  try {
    let blogs = await db.Blogs.findOne({
      where: { id: id },
      attributes: [
        "id",
        "name",
        "description",
        "typeBlog",
        "updatedAt",
        "image",
      ],
    });
    if (blogs) {
      return {
        EM: "Get blog by id success",
        EC: 0,
        DT: blogs,
      };
    } else {
      return {
        EM: "Get blog by id fail",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const createNewBLog = async (rawUserData) => {
  try {
    if (!rawUserData.typeBlog) {
      return {
        EM: "Error with empty Type Blog",
        EC: 1,
        DT: "typeBlog",
      };
    }
    let blog = await db.Blogs.create(rawUserData);
    if (blog) {
      return {
        EM: `Create blog succeeds`,
        EC: 0,
        DT: blog,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};

const updateBlog = async (rawUserData) => {
  try {
    if (!rawUserData.typeBlog) {
      return {
        EM: "Error with empty Type Blog",
        EC: 1,
        DT: "typeBlog",
      };
    }
    let blog = await db.Blogs.findOne({
      where: { id: rawUserData.id },
    });
    if (blog) {
      await blog.update({
        name: rawUserData.name,
        description: rawUserData.description,
        typeBlog: rawUserData.typeBlog,
        image: rawUserData.image,
      });
      return {
        EM: "A blog edited successfully",
        EC: 0,
        DT: blog,
      };
    } else {
      return {
        EM: "Blog not found",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};
const deleteBlog = async (id) => {
  try {
    let blog = await db.Blogs.findOne({
      where: { id: id },
    });
    if (blog) {
      await blog.destroy();
      return {
        EM: "Delete blog succeed",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Blog not found",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Some thing went wrong in service...",
      EC: -2,
    };
  }
};

module.exports = {
  getAllBlog,
  getBlogById,
  createNewBLog,
  updateBlog,
  deleteBlog,
};
