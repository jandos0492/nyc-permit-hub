'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      score: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      pass: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      vehicleType: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      testType: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      testLanguage: {
        type: Sequelize.STRING(30),
        allowNull: true,
        defaultValue: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};