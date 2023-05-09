const { Article } = require("../models/models");

async function index(req, res) {
  const articles = await Article.findAll({ include: User, order: [["id", "DESC"]] });
  res.json(articles);
}

module.exports = {
  index,
};
