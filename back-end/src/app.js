const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

app.use(express.json());
app.use(cors());

module.exports = app;
