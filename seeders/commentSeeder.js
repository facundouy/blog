const { faker } = require("@faker-js/faker");
const { Comment } = require("../models/models");

module.exports = async () => {
  const comments = [];
  function oneOrOneToTen() {
    if (Math.floor(2 * Math.random())) {
      return 1;
    } else {
      return Math.floor(10 * Math.random() + 1);
    }
  }

  for (let i = 0; i < 60; i++) {
    comments.push({
      content: faker.lorem.paragraphs(),
      userId: oneOrOneToTen(),
      articleId: Math.floor(30 * Math.random() + 1),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Comment seeder was ran.");
};
