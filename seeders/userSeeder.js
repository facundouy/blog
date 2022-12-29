const { faker } = require("@faker-js/faker");
const { User } = require("../models/models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: Math.floor(70 * Math.random() + 15),
    };
    users.push(user);
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
