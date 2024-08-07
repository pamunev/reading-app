const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

app.use(express.json());
app.use(cors());

app.get((req, res) => {
  res.json("Hello!");
});

module.exports = app;
