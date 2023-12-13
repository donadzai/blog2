const path = require("path");
const hbs = require("express-handlebars");
const routes = require("../route");

const configViewEngine = (app, express) => {
  //set views engine
  app.engine("hbs", hbs.engine({ extname: ".hbs" }));
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));

  //define static file: css, html, img......
  app.use(express.static(path.join(__dirname, "../public")));

  // route
  routes(app);
};

module.exports = configViewEngine;
