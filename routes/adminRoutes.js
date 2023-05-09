const express = require("express");
const userController = require("../controllers/userController");
const articleController = require("../controllers/articleController");

const adminRouter = express.Router();

adminRouter.get("/users", userController.index);
adminRouter.get("/articles", articleController.adminIndex);

module.exports = adminRouter;
