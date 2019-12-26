var database = require("../../config/databaseConnection.js");

var user = database.sequelize.define(
  "user",
  {
    //attributes
    id: {
      type: database.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fullname: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    email: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    number: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    bloodGroup: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    age: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    gender: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    password: {
      type: database.Sequelize.TEXT,
      allowNull: false
    },
    image: {
      type: database.Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    tableName: "user"
  }
);

user
  .sync({ force: false })
  .then(function() {
    //console.log("success");
  })
  .catch(function(err) {
    // console.log(err);
  });

module.exports = user;
