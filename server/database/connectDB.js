const sequelize = require("./connection");
const {Sequelize} = require('sequelize')
async function connectDB() {
  const databaseName = "result";

  try {
    // Check if the database exists
    const query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}';`;
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT,
    });

    if (result.length === 0) {
      // Create the database
      await sequelize.query(`CREATE DATABASE ${databaseName};`);
      console.log(`Database ${databaseName} created successfully.`)
    }
    else {
        console.log(`Database '${databaseName}' connected successfully.`);
    }
  } catch (error) {
    console.error("Error checking/creating database:", error);
  }
}

module.exports = connectDB
