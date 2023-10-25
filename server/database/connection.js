const { Sequelize } = require("sequelize");
require("dotenv").config();
var username = process.env.DBUSERNAME;
var password = process.env.DBPASSWORD;
console.log(username, password);
var sequelize = new Sequelize("sql12656561", username, password, {
  host: "sql12.freesqldatabase.com",
  dialect: "mysql",
});

module.exports = sequelize;
