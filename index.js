const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./src/Routers/user");
const products = require("./src/Routers/product");
const searchProducts = require("./src/Routers/searchProducts");
const banner = require("./src/Routers/banner");
const category = require("./src/Routers/Category");
const promotion = require("./src/Routers/Promotion");
const comments = require("./src/Routers/Comments");
const userAdmin = require("./src/Routers/Admin/User");
const orders = require("./src/Routers/Order");
const cookieParser = require("cookie-parser");

mongoose
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.fkjkxce.mongodb.net/customerdb?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection success"))
  .catch((error) => console.error(`connection failed ${error}`));

app.get("/", (req, res) => {
  return res.send("SERVER ON");
});

//middleware
app.use(cookieParser());
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/users", users);
app.use("/products", products);
app.use("/search", searchProducts);
app.use("/banner", banner);
app.use("/category", category);
app.use("/promotion", promotion);
app.use("/comments", comments);
app.use("/orders", orders);
app.use("/src/Images/avatarUsers", express.static("src/Images/avatarUsers"));
app.use(
  "/src/Images/ImageProducts",
  express.static("src/Images/ImageProducts")
);
app.use("/src/Images/ImageBanner", express.static("src/Images/ImageBanner"));
app.use("/src/Images/Promotion", express.static("src/Images/Promotion"));

// Admin
app.use("/userAdmin", userAdmin);

//catch 404 error and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
