const passport = require("passport");
const localStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Article, User, Comment } = require("./models");

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new localStrategy(
      {
        usernameField: "email",
      },
      async (email, password, cb) => {
        // Compara el email del usuario.
        const userLog = await User.findOne({ where: { email: email } });
        if (!userLog) {
          return cb(null, false, { message: "Incorrect username or password" });
        }
        // Compara el password del usuario
        const comparePass = await bcrypt.compare(password, userLog.password);
        if (comparePass) {
          return cb(null, userLog);
        }
        return cb(null, false, { message: "Incorrect username or password" });
      }
    )
  );

  // done recibe un error y el id del usuario, de esta manera guarda al usuario.
  // Cuando el usuario se registra, lo guardamos en la sesión del servidor.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //  Por cada vez que el usuario navega por medio de su id, passport deserializa el usuario y revisa en la db si ese usuario existe
  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, user);
      });
  });
};
