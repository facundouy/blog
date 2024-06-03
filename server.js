require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

console.log(`
=================================================================
=================================================================
=================================================================
=================================================================
=================================================================
`);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

dbInitialSetup(); // Comment or uncomment to set DB initial setup.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
