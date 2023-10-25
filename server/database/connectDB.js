const sequelize = require("./connection");
const { Sequelize } = require("sequelize");
async function connectDB() {
  const databaseName = "sql12656561";

  try {
    // Check if the database exists
    const query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}';`;
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT,
    });

    if (result.length === 0) {
      // Create the database
      await sequelize.query(`CREATE DATABASE ${databaseName};`);
      const table = await sequelize.query(`SELECT * from ${databaseName}`);
      console.log("result", table);
      console.log(`Database ${databaseName} created successfully.`);
    } else {
      const table = await sequelize.query(`SELECT * from ${databaseName}`);
      console.log("result", table);
      console.log(`Database ${databaseName} created successfully.`);
      console.log(`Database '${databaseName}' connected successfully.`);
    }
  } catch (error) {
    console.error("Error checking/creating database:", error);
  }
}

module.exports = connectDB;
