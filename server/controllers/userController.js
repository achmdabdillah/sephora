const userController = require("express").Router();
const User = require("../models/User");

userController.post("/location", async (req, res) => {
  try {
    const newLocation = await User.create({ ...req.body });
    return res.status(201).json(newLocation);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = userController;
