const express = require("express");
const routerUsers = express.Router();

const UserController = require("../Controllers/User");

routerUsers
  .route("/")
  .get(UserController.getAll)
  
module.exports = routerUsers;
