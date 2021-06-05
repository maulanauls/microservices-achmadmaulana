const express = require("express");
let controller = require("../controller/common");
let http = require("../connection/http");
const clientDB = require("../connection/database");
const router = express.Router();

clientDB.connect((err, db) => {
  // perform actions on the collection object
  if (err) {
    console.error("error occurred while connecting to DB!");
  } else {
    console.log("database connection established successfully");
    router.get("/", async function (req, res, next) {
      try {
        const response = await controller.generate_token(req, db, res);
        res.json(http.responseHttp(200, response, false));
      } catch (error) {
        console.log(error);
        res.status(500);
        res.json(http.http_response(500, error, false));
      }
    });
  }
});

module.exports = router;
