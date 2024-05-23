const {
  getAllBlog,
  getBlogById,
  createNewBLog,
  updateBlog,
  deleteBlog,
} = require("../service/blogService");

const readFunc = async (req, res) => {
  try {
    if (req.query.id) {
      let data = await getBlogById(req.query.id);
      if (data) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: data.DT,
        });
      }
    } else {
      let data = await getAllBlog();
      if (data) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: data.DT,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const createFunc = async (req, res) => {
  try {
    let data = await createNewBLog(req.body);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const updateFunc = async (req, res) => {
  try {
    let data = await updateBlog(req.body);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
const deleteFunc = async (req, res) => {
  try {
    let data = await deleteBlog(req.body.id);
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
