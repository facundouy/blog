const express = require("express");
const userController = require("../controllers/userController");

const adminRouter = express.Router();

adminRouter.get("/users", userController.showUsers);

module.exports = adminRouter;
