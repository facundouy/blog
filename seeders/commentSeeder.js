const { faker } = require("@faker-js/faker");
const { Comment } = require("../models/models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 60; i++) {
    comments.push({
      content: faker.lorem.paragraphs(),
      userId: Math.floor(10 * Math.random() + 1),
      articleId: Math.floor(30 * Math.random() + 1),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles.");
};
