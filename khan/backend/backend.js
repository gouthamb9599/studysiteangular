const bodyParser = require("body-parser");
const express = require("express");
// const db = require("./db/db");
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "rahul1095",
  host: "localhost",
  port: 5432,
  database: "postgres"
});
client.connect().then(() => console.log("connected database"));
const app = express();
// var cors = require("cors");

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/api/v1/user", (req, res) => {
//   if (!req.body.name) {
//     return res.status(400).send({
//       success: "false",
//       message: "name is required"
//     });
//   } else if (!req.body.email) {
//     return res.status(400).send({
//       success: "false",
//       message: "email is required"
//     });
//   } else if (!req.body.role) {
//     return res.status(400).send({
//       success: "false",
//       message: "role is required"
//     });
//   } else if (!req.body.password) {
//     return res.status(400).send({
//       success: "false",
//       message: "password is required"
//     });
//   }
//   const user = {
//     userid: db.length + 1,
//     name: req.body.name,
//     email: req.body.email,
//     role: req.body.role,
//     password: req.body.password
//   };
//   client.push(user);
//   return res.status(201).send({
//     success: "true",
//     message: "user added successfully",
//     user
//   });
// });
// app.get("/api/v1/user", (req, res) => {
//   res.status(200).send({
//     success: "true",
//     message: "user retrived",
//     user: details
//   });
// });
// const user = {
//   userid: db.length + 1,
//   name: req.body.name,
//   email: req.body.email,
//   role: req.body.role,
//   password: req.body.password
// };

app.post("/signup", (req, res) => {
  client.query(
    "INSERT INTO details(name,email,role,password) values($1,$2,$3,$4)",
    [req.body.name, req.body.email, req.body.role, req.body.password],
    (err, res) => {
      if (err) console.log(err, res);
      else console.log("data entered succesfully");
    }
  );
  console.log(req.body.name);
});

const PORT = 5223;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
