const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/database.db`, // Путь к файлу базы данных SQLite
});

module.exports = sequelize;