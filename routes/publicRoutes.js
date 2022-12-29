const express = require("express");
const articleController = require("../controllers/articleController");
const pagesController = require("../controllers/pagesController");
const commentController = require("../controllers/commentController");

const publicRouter = express.Router();

publicRouter.get("/", articleController.showHome);
publicRouter.get("/artjson", articleController.showJson);
publicRouter.get("/commjson", commentController.showJson);
publicRouter.get("/contact", pagesController.showContact);
publicRouter.get("/about", pagesController.showAbout);
publicRouter.get("/articles/:id", articleController.show);

module.exports = publicRouter;
