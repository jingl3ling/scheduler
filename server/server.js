const express = require("express");
const path = require("path");
const routes = require("./routes")

require("dotenv").config({ path: path.join(__dirname, '../.env') });

const app = express();
app.use('/',express.json());

app.use("/test", routes.test)

module.exports = app;