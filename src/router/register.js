const express = require("express");
let controller = require("../controller/register");
let http = require("../connection/http");
const middleware = require("../middleware");
const clientDB = require("../connection/database");
const router = express.Router();

clientDB.connect((err, db) => {
  // perform actions on the collection object
  if (err) {
    console.error("error occurred while connecting to DB!");
  } else {
    console.log("database connection established successfully");
    router.post("/user", async function (req, res, next) {
      try {
        let response = await middleware.payloadAuthorization(req, res);
        if (response.status) {
          response = await controller.userCreate(req, res);
        }
        res.json(http.responseHttp(200, response, false));
      } catch (error) {
        console.log(error);
        res.status(500);
        res.json(http.responseHttp(500, error, false));
      }
    });
  }
});

module.exports = router;