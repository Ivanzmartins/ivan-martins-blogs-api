// const { DataTypes } = require('sequelize/types');

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    }, {
    timestamps: false,
    });
    return User;
}

module.exports = User;