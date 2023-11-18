'use strict';
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    resetToken: {
      type: DataTypes.STRING,
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "email", "createdAt", "updatedAt", "resetToken"],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ["hashedPassword", "resetToken"] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  // Define an instance method, User.prototype.toSafeObject, in the user.js
  // model file that will return an object with the User instance information
  // that is safe to save to a JWT. 
  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow funciton
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  // Define an instance method, User.prototype.validatePassword in the user.js
  // model file that will accept a password string and return true if there is
  // a match with the User instance's hashedPassword, otherwise return false.
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // Define a static method, User.getCurrentUserById in the user.js model file
  // that will accept an id and return a User with that id using the currentUser scope.
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  // Method to associate the reset token with a user
  User.prototype.setResetToken = async function (resetToken) {
    this.resetToken = resetToken;
    await this.save();
  }

  // Define a static method, User.login in the user.js model file that will
  // accept an object with a credential and password key and find a User with a
  // username or email with the specified credential using the loginUser scope.
  // If a user is found, then validate the password by passing it into the
  // instance's .validatePassword method. If the password is valid, then
  // return the user with the currentUser scope.
  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential.toLowerCase(),
          email: credential.toLowerCase(),
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  // Define a static method, User.signup in the user.js model file that will
  // accept an object with a username, email and password key. Hash the password
  // using bcryptjs package's hashSync method. Create a User with the username,
  // email, and hashedPassword. Return the created user with the currentUser scope.
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      hashedPassword,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};