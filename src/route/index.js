const homeRoute = require("./home");

function routes(app) {
  app.use("/", homeRoute);
}

module.exports = routes;
