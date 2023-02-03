const express = require("express");
const mongoose = require("mongoose");
const app = express();

const products = require("./src/Routers/product");
const users = require("./src/Routers/Users");
const searchProducts = require("./src/Routers/searchProducts");
const banner = require("./src/Routers/banner");
const category = require("./src/Routers/Category");
const promotion = require("./src/Routers/Promotion");
const comments = require("./src/Routers/Comments");
const userAdmin = require("./src/Routers/Admin/User");

mongoose
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.fkjkxce.mongodb.net/customerdb?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection success"))
  .catch((error) => console.error(`connection failed ${error}`));


app.get("/", (req, res) => {
  return res.send("SERVER ON");
});

app.use("/products", products);
app.use("/users", users);
app.use("/search/products", searchProducts);
app.use("/banner", banner);
app.use("/category", category);
app.use("/promotion", promotion);
app.use("/comments", comments);
app.use("/src/Images/avatarUsers", express.static("src/Images/avatarUsers"));
app.use(
  "/src/Images/ImageProducts",
  express.static("src/Images/ImageProducts")
);
app.use("/src/Images/ImageBanner", express.static("src/Images/ImageBanner"));
app.use("/src/Images/Promotion", express.static("src/Images/Promotion"));

// Admin
app.use("/userAdmin", userAdmin);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
