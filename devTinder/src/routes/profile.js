const express = require("express");
const { userAuth } = require("../middlewares/auth");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch {
    res.status(400).send(error?.message ?? "Somthing went wrong!");
  }
});

profileRouter.post("/profile/edit", userAuth, async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    res.send(`${loggedInUser.firstName} your profile updated successfully`);
  } catch (error) {
    res.status(400).send(error?.message ?? "Somthing went wrong!");
  }
});

module.exports = profileRouter;
