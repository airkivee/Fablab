// models/ProfileImg.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProfileImg = sequelize.define('ProfileImg', {
  imageSrc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Добавляем это поле для сделать userId уникальным
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ProfileImg;
