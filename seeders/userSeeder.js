const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const user = [];

  for (let i = 0; i < 5; i++) {
    user.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      role: 100 * Math.floor(4 * Math.random() + 1),
    });
  }

  await User.bulkCreate(user);
};
