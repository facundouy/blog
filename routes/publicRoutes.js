const express = require("express");
const articleController = require("../controllers/articleController");
const pagesController = require("../controllers/pagesController");
const commentController = require("../controllers/commentController");

const publicRouter = express.Router();

publicRouter.get("/", articleController.showHome);
publicRouter.get("/about", pagesController.showAbout);
publicRouter.get("/articles/:id", articleController.show);
publicRouter.post("/articles/:id", commentController.store);

module.exports = publicRouter;
