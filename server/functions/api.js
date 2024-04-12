const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors");
const User = require("./models/User");

//Get all students
router.get("/", (req, res) => {
  res.send("App is running..");
});

//Create new record
router.post("/home/location", async (req, res) => {
  try {
    const newLocation = await User.create({ ...req.body });
    return res.status(201).json(newLocation);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.use(cors());
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
