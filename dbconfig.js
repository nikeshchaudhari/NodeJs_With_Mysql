
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});
dbConnect.connect((err) => {
  if (err) {
    console.log("DB connection failed", err);
  }
  console.log("Db connected");
});
