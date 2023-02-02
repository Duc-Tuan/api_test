const express = require("express");
const routerUser = express.Router();

const controlerUSer = require("../Controllers/UserController");

routerUser.route("/")
    .get(controlerUSer.index);

module.exports = routerUser;
