const { Article, Comment, User } = require("../models/models");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User, order: [["id", "DESC"]] });
  res.render("home", { articles });
}

async function showJson(req, res) {
  const articles = await Article.findAll({ include: User, order: [["id", "DESC"]] });
  res.json(articles);
}

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId, { include: User, order: [["id", "DESC"]] });
  const comments = await Comment.findAll({
    include: User,
    where: { articleId },
    order: [["id", "DESC"]],
  });

  res.render("article", { article, comments });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  showHome,
  showJson,
};
