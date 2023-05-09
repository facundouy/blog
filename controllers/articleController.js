const { Article, Comment, User } = require("../models/models");

async function index(req, res) {
  const articles = await Article.findAll({ include: User, order: [["id", "DESC"]] });
  function getFirstParagraph(article) {
    const match = article.match(/<p>(.*?)<\/p>/);
    if (!match) {
      return "";
    }
    return match[1].replace(/<\/?p>/g, "");
  }
  res.render("home", { articles, getFirstParagraph });
}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findByPk(articleId, { include: User, order: [["id", "DESC"]] });

  const dateFormatter = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "America/Montevideo",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  };

  const comments = await Comment.findAll({
    include: User,
    where: { articleId },
    order: [["id", "DESC"]],
  });
  res.render("article", { article, comments, dateFormatter });
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
};
