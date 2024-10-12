'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Users"
    return queryInterface.bulkInsert(options, [
      {
        email: "demo@user.io",
        username: "Demo-lition",
        hashedPassword: bcrypt.hashSync("password"),
      },
      {
        email: "fakeuser1@gmail.com",
        username: "FakeUser1",
        hashedPassword: bcrypt.hashSync("password1"),
      },
      {
        email: "fakeuser2@gmail.com",
        username: "FakeUser2",
        hashedPassword: bcrypt.hashSync("password2"),
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users", {
      // username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] }
    }, {});
  }
};