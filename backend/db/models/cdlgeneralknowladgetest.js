'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CDLGeneralKnowladgeTest extends Model {
    static associate(models) {
      // define association here
    }
  }
  CDLGeneralKnowladgeTest.init({
    no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    correctAnswerIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'CDLGeneralKnowladgeTest',
  });
  return CDLGeneralKnowladgeTest;
};