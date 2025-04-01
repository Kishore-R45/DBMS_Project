const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kishore@2006",
  database: "dbms",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API Route to Insert Data
app.post("/addUser", (req, res) => {
  const { name,age,DOB,Mobile_No,Email } = req.body;
  const sql = "INSERT INTO users (name, age, DOB, Mobile_No, Email) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name,age,DOB,Mobile_No,Email], (err, result) => {
    if (err) throw err;
    res.send({ message: "User added successfully", result });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
