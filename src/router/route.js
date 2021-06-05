const express = require("express");
const router = express.Router();
const register = require("./register");
const user = require("./user");
const login = require("./login");
const common = require("./common");
router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});
router.use("/register", register);
router.use("/login", login);
router.use("/user", user);
router.use("/generate-token", common);

module.exports = router;