const express = require("express");
const apiController = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.get("/articles", apiController.index);

module.exports = apiRouter;
