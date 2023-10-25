const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection")
const Result = sequelize.define("Result", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rollno: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY, // Date without time
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Result