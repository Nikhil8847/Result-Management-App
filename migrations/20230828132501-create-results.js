'use strict';

const Result = require('../server/model/model');
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("results", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rollno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY, // Date without time
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("results");
  }
};
