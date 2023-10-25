const { Sequelize} = require('sequelize')
require('dotenv').config()
var username = process.env.DBUSERNAME;
var password = process.env.DBPASSWORD;
var sequelize = new Sequelize("result", username, password, {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = sequelize