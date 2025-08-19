const express = require("express");
const route = express.Router();
const db = require("../dbconfig");

route.post("/add-student", async (req, res) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const faculty = req.body.faculty;
    const query = `INSERT INTO student (name,age,faculty)VALUES(?,?,?)`;

    db.query(query, [name, age, faculty], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database insert failed" });
      } else {
        console.log("Insert Table");
      }
      res.status(200).json({
        msg: "DATA insert..",
        id: result.insertId,
      });
    });
  } catch (err) {
    console.log("Not insert");
    res.status(500).json({
      error: err,
    });
  }
});

// mysql get

route.get("/all", async (req, res) => {
  try {
    const query = "SELECT * FROM student";
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
      res.status(200).json({
        msg: result,
      });
    });
  } catch (err) {
    console.log("ERRor");
    res.status(500).json({
      error: err,
    });
  }
});

route.get("/student/:id", async (req, res) => {
  try {
    const query = "SELECT * FROM student WHERE id = ?";
    db.query(query, req.params.id, (err, result) => {
      if (err) {
        console.log("Error");
      }
      if (result.length === 0) {
        return res.status(404).json({
          msg: "Student not found",
        });
      } else {
        console.log(result[0]);
      }

      res.status(200).json({
        msg: result[0],
      });
    });
  } catch (err) {
    console.log("error");
    res.status(500).json({
      error: err,
    });
  }
});

// delete

route.delete("/student/:id", (req, res) => {
  const query = "DELETE FROM student WHERE id = ? ";
  db.query(query, req.params.id, (err, result) => {
    if (err) {
      console.log("error");
      return res.status(500).json({
        msg: "error",
      });
    } else {
      console.log(result.affectedRows);
      return res.status(200).json({
        msg: "delete data",
        data:result.affectedRows
      });
    }
  });
});
// update 


module.exports = route;
