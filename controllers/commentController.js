const { Comment, User } = require("../models/models");

async function showJson(req, res) {
  const comments = await Comment.findAll({
    include: User,
    order: [["id", "DESC"]],
  });
  res.json(comments);
}

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
// TODO fix userId and articleId
async function store(req, res) {
  const articleId = req.params.id;
  await Comment.create({
    content: req.body.content,
    userId: 1,
    articleId: articleId,
  });
  res.redirect(`/articles/${articleId}`);
}

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
  showJson,
};
