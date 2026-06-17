const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/authRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/kt6")
  .then(() => {
    app.listen(5000, () => {
      console.log("SERVER STARTED");
    });
  });