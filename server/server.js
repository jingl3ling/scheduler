const express = require("express");
const path = require("path");
const routes = require("./routes")
const cors = require("cors");

require("dotenv").config({ path: path.join(__dirname, '../.env') });

const app = express();
app.use('/',express.json());
app.use(cors({origin: "*"}));

app.use("/test", routes.test)
app.use('/schedule',routes.schedule)

module.exports = app;