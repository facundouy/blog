const express = require("express");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

const apiRouter = express.Router();

apiRouter.get("/articles", articleController.showJson);
apiRouter.get("/comments", commentController.showJson);

module.exports = apiRouter;
