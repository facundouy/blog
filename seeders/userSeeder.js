const { faker } = require("@faker-js/faker");
const { User } = require("../models/models");

module.exports = async () => {
  const users = [];

  const anonymous = {
    username: "Anonymous",
  };
  users.push(anonymous);

  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const user = {
      firstname: firstName,
      lastname: lastName,
      username: firstName + " " + lastName,
      age: Math.floor(70 * Math.random() + 15),
    };
    users.push(user);
  }

  await User.bulkCreate(users);
  console.log("[Database] User seeder was ran.");
};
