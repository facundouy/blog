const { faker } = require("@faker-js/faker");
const { Comment } = require("../models/models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 100; i++) {
    comments.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: Math.floor(10 * Math.random() + 1),
      articleId: Math.floor(50 * Math.random() + 1),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles.");
};
