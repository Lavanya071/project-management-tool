const { Sequelize } = require('sequelize');
const path = require('path');

// Use SQLite for simplicity
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../database.sqlite'),
  logging: false // optional: remove this line to see all SQL queries in console
});

module.exports = sequelize;
