const express = require("express");
const mongoose = require("mongoose");
const app = express();

const products = require("./src/Routers/product");

mongoose
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.fkjkxce.mongodb.net/customerdb?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection success"))
  .catch((error) => console.error(`connection failed ${error}`));

app.get("/", (req, res) => {
  return res.send("SERVER ON");
});

app.use("/products", products)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
