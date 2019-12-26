const bcrypt = require("bcryptjs");
const user = require("../model/user");
exports.validator = (req, res, next) => {
  // to check wheather the username is empty or not
  if (req.body.fullname === "") {
    res.send("username cannot be empty");
  } else if (req.body.email === "") {
  }
  user
    .findOne({
      where: { fullname: req.body.fullname }
    })
    .then(function(result) {
      if (result === null) {
        res.status(201);
        res.json({
          satus: 201,
          message: "Yplease registered first"
        });
        console.log("registered first");
      } else {
        req.passwordFromDB = result.dataValues.password;
        res.status(409);
        res.json({
          satus: 409,
          message: "Username exists"
        });
        next();
      }
    })
    .catch(function(err) {});
  next();
};


