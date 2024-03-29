const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const apiRoutes = require("./apiRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
  app.use("/api", apiRoutes);
};

// TODO: get all unexisting routes
