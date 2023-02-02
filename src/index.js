const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.fkjkxce.mongodb.net/customerdb?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection success"))
  .catch((error) => console.error(`connection failed ${error}`));

app.get("/", (req, res) => {
  return res.send("SERVER ON");
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
