const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
};

// TODO atajar todas las rutas que no existen
