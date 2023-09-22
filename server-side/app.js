import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config/.env" });
app.use(express.json());

const port = process.env.PORT || 3000;

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
