const sequelize = require("./src/database/connection");
const Sequelize = require('sequelize')
async function createDatabase() {
  const databaseName = "studentResults";

  try {
    // Check if the database exists
    const query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}';`;
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT,
    });

    if (result.length === 0) {
      // Create the database
      await sequelize.query(`CREATE DATABASE ${databaseName};`);
      console.log(`Database '${databaseName}' created.`);
    } else {
      console.log(`Database '${databaseName}' already exists.`);
    }
  } catch (error) {
    console.error("Error checking/creating database:", error);
  } finally {
    await sequelize.close();
  }
}

createDatabase();
