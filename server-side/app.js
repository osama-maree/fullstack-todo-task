import express from "express";
import dotenv from "dotenv";
import todoRouter from "./src/routes/todoRout.js";
const app = express();
dotenv.config({ path: "./config/.env" });
app.use(express.json());
const port = process.env.PORT || 3000;

const baseURL = process.env.BASEURL;

app.use(baseURL, todoRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "page is not found" });
});

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err["cause"])
      .json({ message: "catch error", error: err.message });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// db;

// app.get("/", (req, res) => {
//   db.run("INSERT INTO users (id, name) VALUES (?, ?)", [1, "Alice"], (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Table is created");
//   });
//   db.all("SELECT * FROM users", [], (err, rows) => {
//     if (err) {
//       return res.json({ error: "error" });
//     }
//     res.status(200).json(rows);
//   });
// });
