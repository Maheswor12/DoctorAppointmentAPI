const userLogin = require("../model/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.validatorLogin = (req, res, next) => {
  // regsitered or not
  if (req.body.email === null) {
    res.send("email cannot be empty");
  }
  userLogin
    .findOne({
      where: { email: req.body.email }
    })
    .then(function(result) {
      if (result === null) {
        res.send("You have not registered, please register first");
      } else {
        req.passwordFromDB = result.dataValues.password;
        next();
      }
    })
    .catch(function(err) {});
};
