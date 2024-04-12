const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userController = require("./controllers/userController");
const app = express();

//connect our db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/home/", userController);

// start server
app.listen(process.env.PORT, () =>
  console.log("server has been started on PORT" + process.env.PORT)
);
