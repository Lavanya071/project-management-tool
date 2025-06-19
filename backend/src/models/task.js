const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  // You can define associations here if needed later
}

const initTask = (sequelize) => {
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    deadline: DataTypes.DATE,
    projectId: DataTypes.INTEGER,
    assignedTo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',  // Optional, ensures correct table name
    timestamps: true     // Optional, add createdAt/updatedAt
  });

  return Task;
};

module.exports = initTask;
