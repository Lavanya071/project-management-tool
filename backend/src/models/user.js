const { Model, DataTypes } = require('sequelize');

class User extends Model {}

const initUser = (sequelize) => {
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true
  });

  return User;
};

module.exports = initUser;
