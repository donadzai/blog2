const express = require("express");
const app = express();
require("dotenv").config();
let port = process.env.PORT;
const configViewEngine = require("./config/viewEngine");

configViewEngine(app, express);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
