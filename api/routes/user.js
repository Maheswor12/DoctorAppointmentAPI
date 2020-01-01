const express = require("express");
const router = express();
const userController = require("../controllers/user");
var loginController = require("../controllers/loginUsers");
// for image
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, image, cb) {
    cb(null, image.originalname);
  }
});
//multer is used to upload the file
const upload = multer({ storage: storage });

router.post(
  "/signup",
  upload.single("photo"),
  userController.registerUser,
  userController.registerUser
);
router.post("/login", loginController.validatorLogin);
module.exports = router;
// userController.validator,
