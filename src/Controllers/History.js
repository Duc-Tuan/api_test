const HistoryBuy = require("../Models/HistoryBuy");

const getAll = (req, res, next) => {
  HistoryBuy.find().populate("HistoryBuy_user")
    .then((data) => {
      return data.filter((item) => item.HistoryBuy_data.length > 0);
    })
    .then((data) => {
      return res.status(200).json({
        data,
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getAll,
};
