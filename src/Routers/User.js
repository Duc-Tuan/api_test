const express = require("express");
const routerUsers = express.Router();

const UserController = require("../Controllers/User");
// const uploadFile = require("../middlewares/uploadFile");
// const decentralization = require("../DecentralizationAdmin");

routerUsers.route("/").get(UserController.index);

// routerUsers.route("/login").post(UserController.postLoginUser);

// routerUsers.route("/loginUser").post(UserController.getloginUser);

// routerUsers.route("/register").post(UserController.newUser);

// routerUsers.route("/resetPass").post(UserController.resetPass);

// routerUsers
//   .route("/:userID")
//   .get(UserController.getUserById)
//   .put(UserController.replaceUser)
//   .patch(uploadFile.single("avatar"), UserController.updateUser)
//   .delete(decentralization.decentralization__Users ,UserController.deleteUser);

// routerUsers
//   .route("/:userID/carts")
//   .get(UserController.getUserProduct)
//   .post(UserController.newUseProduct);

// routerUsers
//   .route("/:userID/pay")
//   .get(UserController.getUserPay)
//   .post(UserController.newUsePay);

// routerUsers
//   .route("/:userID/history")
//   .get(UserController.getUserHistory)
//   .post(UserController.newUseHistory);

// routerUsers.route("/:userID/history/:statusName")
//   .get(UserController.getUserHistoryStatus);

// routerUsers
//   .route("/:userID/carts/:productID")
//   .post(UserController.postProductUser)
//   .delete(UserController.deleteCartItem);

module.exports = routerUsers;
