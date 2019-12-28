const express = require("express");
const router = express();
const UserController = require("../controllers/user");
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

router.post("/signup", upload.single("photo"),   UserController.registerUser);
module.exports = router;
// UserController.validator,