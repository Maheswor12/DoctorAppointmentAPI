const bcrypt = require("bcryptjs");
const user = require("../model/user");
exports.validator = (req, res, next) => {
  // to check wheather the username is empty or not
  if (req.body.fullname === "") {
    res.send("fullname cannot be empty");
  } else if (req.body.email === "") {
    res.send("email cannot be empty");
  } else if (req.body.number === "") {
    res.send("number cannot be empty");
  } else if (req.body.bloodGroup === "") {
    res.send("bloodgroup cannot be empty");
  } else if (req.body.age === "") {
    res.send("age cannot be empty");
  } else if (req.body.gender === "") {
    res.send("gender cannot be empty");
  } else if (req.body.password === "") {
    res.send("password cannot be empty");
  } else if (req.body.image === "") {
    res.send("image cannot be empty");
  }
  user
    .findOne({
      where: { email: req.body.email }
    })
    .then(function(result) {
      if (result === null) {
        next();
      } else {
        res.status(409);
        res.json({
          satus: 409,
          message: "You are already registered"
        });
      }
    })
    .catch(function(err) {
      next(err);
    });
};

exports.registerUser = (req, res, next) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      //console.log(hash);
      user
        .create({
          fullname: req.body.fullname,
          email: req.body.email,
          number: req.body.number,
          bloodGroup: req.body.bloodGroup,
          age: req.body.age,
          gender: req.body.gender,
          password: hash,
          image: "mahesh_image"
        })
        .then(function(result) {
          //console.log(result);
          res.status(201);
          res.json({
            satus: 201,
            message: "You have been registered successfully"
          });
        })
        .catch(function(err) {
          //console.log(err);
          next(err);
        });
    });
  });
};
