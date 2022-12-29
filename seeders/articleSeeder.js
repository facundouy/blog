const { faker } = require("@faker-js/faker");
const { Article } = require("../models/models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 50; i++) {
    function contentCreator() {
      const numberOfParagraphs = Math.floor(4 * Math.random() + 3);
      let articleContent = "";
      for (let i = 0; i < numberOfParagraphs; i++) {
        articleContent += "<p>";
        articleContent += faker.lorem.paragraphs();
        articleContent += "</p>";
      }
      return articleContent;
    }
    articles.push({
      title: faker.lorem.sentence(5),
      content: contentCreator(),
      userId: Math.floor(10 * Math.random() + 1),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};

// TODO imágenes de los artículos
