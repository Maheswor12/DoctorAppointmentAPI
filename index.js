const express = require("express");
const doctorApp = express();
const bodyParser = require("body-parser");
const userRoutes = require('./api/routes/user');
doctorApp.use(bodyParser.urlencoded({ extended: true }));

// Routes which should handle requests
doctorApp.use("/user", userRoutes);
// for empty default url
doctorApp.use("/", (req, res, next) => {
  res.status(404);
  res.send("Page not found");
});
// to handle error
doctorApp.use((err, req, res, next) => {
  res.json({
    status: 500,
    message: error.message
  });
  res.send(error.message);
});
module.exports = doctorApp;
