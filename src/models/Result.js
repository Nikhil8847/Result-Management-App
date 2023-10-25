const Sequelize = require("sequelize")
const sequelize = require("../database/connection")

module.exports = sequelize.define("Result", {
    rollno: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    dob: Sequelize.DATE,
    score: Sequelize.INTEGER
});