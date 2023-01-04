const db = require("./models/models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] Tables were created");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/articleSeeder")();
  await require("./seeders/commentSeeder")();
  console.log("[Database] Test data were inserted.");
};
