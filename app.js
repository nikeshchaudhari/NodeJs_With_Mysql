const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const dataConn = require("./dbconfig")
app.use(bodyParser.json())
module.exports = app;
