const express = require("express");
const router = express();
const UserController = require("../controllers/user");
router.post("/signup", UserController.validator, UserController.registerUser);
module.exports = router;
