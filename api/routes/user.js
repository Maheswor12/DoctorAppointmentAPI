const express = require("express");
const router = express();
const UserController = require("../controllers/user");
router.post("/signup", UserController.registerUser);
module.exports = router;
