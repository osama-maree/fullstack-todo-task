import express from "express";
import dotenv from "dotenv";
import todoRouter from "./src/routes/todoRout.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "./config/.env" });
// Enable CORS for all routes
app.use(cors());
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
