const userLogin = require("../model/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.validatorLogin = (req, res, next) => {
  // regsitered or not
  if (req.body.email === "") {
    res.status(200);
    res.json({
      satus: 200,
      message: "Email shouldnot be empty"
    });
  } else if (req.body.password === "") {
    res.status(200);
    res.json({
      satus: 200,
      message: "Password shouldnot be empty"
    });
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

exports.CheckPasssword = (req, res, next) => {
  bcrypt
    .compare(req.body.password, req.passwordFromDB)
    .then(function(result) {
      if (result === true) {
        next();
      } else {
        res.json({ status: 500, message: "Invalid PAssword" });
      }
    })
    .catch(function(err) {
      next(err);
    });
};
exports.TokenGeneration = (req, res) => {
  const payloadd = {
    email: req.body.email,
    userLevel: "superadmin"
  };

  jwt.sign(payloadd, "thisisSecretKey", { expiresIn: "10h" }, function(
    err,
    resultToken
  ) {
    res.json({ usertoken: resultToken });
  });
};

exports.TokenVarify = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.json({ status: 401, message: "Unauthorized" });
  }
  const token = req.headers.authorization.slice(
    7,
    req.headers.authorization.length
  );
  jwt.verify(token, "thisisSecretKey", function(err, result) {
    next();
  });
};
