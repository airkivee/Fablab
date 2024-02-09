// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Путь к вашему файлу с конфигурацией базы данных

const User = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role : {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
