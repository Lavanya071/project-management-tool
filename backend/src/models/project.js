'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // A project can have many tasks
      Project.hasMany(models.Task, {
        foreignKey: 'projectId',
        as: 'tasks'
      });

      // A project can have many user stories
      Project.hasMany(models.UserStory, {
        foreignKey: 'projectId',
        as: 'stories'
      });

      // A project is created by a user (Admin or Manager)
      Project.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'creator'
      });
    }
  }

  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      createdBy: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );

  return Project;
};
