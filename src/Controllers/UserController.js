const User = require("../Modules/Users");

const index = (req, res, next) => {
  User.find({})
    .then((users) => {
      return res.status(200).json({
        users,
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  index,
};
