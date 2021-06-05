const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const route = require("./src/router/route");

require("dotenv").config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", route);


module.exports = app;