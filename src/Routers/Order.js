const express = require("express");
const routerOrder = express.Router();

const OrderController = require("../Controllers/History");

routerOrder
  .route("/")
  .get(OrderController.getAll)

module.exports = routerOrder;
