const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Result", {
  Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: Sequelize.STRING(100),
  password: Sequelize.STRING(20),
  isteacher: Sequelize.BOOLEAN
});
