const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const dataConn = require("./dbconfig")
const userRoute = require("./route/student")
app.use(bodyParser.json())

app.use("/user",userRoute)
module.exports = app;
