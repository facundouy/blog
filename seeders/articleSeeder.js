const { faker } = require("@faker-js/faker");
const { Article } = require("../models/models");
const titles = require("../titles");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 30; i++) {
    function contentCreator() {
      const numberOfParagraphs = Math.floor(4 * Math.random() + 3);
      let articleContent = "";
      for (let i = 0; i < numberOfParagraphs; i++) {
        // TODO add an image to each article
        articleContent += "<p>";
        articleContent += faker.lorem.sentences(10);
        articleContent += "</p>";
      }
      return articleContent;
    }
    articles.push({
      title: titles[i],
      content: contentCreator(),
      userId: Math.floor(10 * Math.random() + 1),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
