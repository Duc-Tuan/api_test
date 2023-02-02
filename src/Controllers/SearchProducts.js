const Product = require("../Models/Product");
const Users = require("../Models/user");
const Categories = require("../Models/category");
const Banners = require("../Models/Banner");

const getDataSearchName = (req, res, next) => {
  const { name, type, page, pageSize } = req.query;
  const dataSearch = new RegExp(name, "i");
  if (name && type === "less") {
    if (page !== undefined && pageSize !== undefined) {
      if (page < 1) page = 1;
      const skipNumber = (page - 1) * pageSize;
      console.log(skipNumber);
      Product.find({ product_name: dataSearch })
        .skip(skipNumber)
        .sort({ product_index: -1 })
        .limit(pageSize)
        .then((data) => {
          Product.countDocuments({ product_name: dataSearch })
            .then((total) => {
              var totalPage = Math.ceil(total / pageSize);
              return res
                .status(200)
                .json({ totalPage, data, currentPage: page });
            })
            .catch((error) => next(error));
        })
        .catch((err) => next(err));
    } else {
      Product.find({ product_name: dataSearch })
        .then((data) => {
          return res.status(200).json({ data });
        })
        .catch((err) => next(err));
    }
  }
};

const getUsers = (req, res, next) => {
  const { name, type } = req.query;
  const dataSearch = new RegExp(name, "i");
  if (name && type === "less") {
    Users.find({ user_name: dataSearch })
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => next(err));
  }
};
const getCategories = (req, res, next) => {
  const { name, type } = req.query;
  const dataSearch = new RegExp(name, "i");
  if (name && type === "less") {
    Categories.find({ category_name: dataSearch })
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => next(err));
  }
};

const getBanners = (req, res, next) => {
  const { name, type } = req.query;
  const dataSearch = new RegExp(name, "i");
  if (name && type === "less") {
    Banners.find({ Banner_contact: dataSearch })
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => next(err));
  }
};
const getComments = (req, res, next) => {};

module.exports = {
  getDataSearchName,
  getUsers,
  getCategories,
  getComments,
  getBanners,
};
