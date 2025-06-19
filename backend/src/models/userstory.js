'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserStory extends Model {
    static associate(models) {
      UserStory.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project'
      });
    }
  }
  UserStory.init(
    {
      projectId: DataTypes.INTEGER,
      story: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'UserStory',
    }
  );
  return UserStory;
};
