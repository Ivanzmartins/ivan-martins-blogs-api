const { User } = require('../models');

const { createToken } = require('../auth/jwtFunctions');

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image = '') => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token, status: 201 };
};

const getAllUsers = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  getUserByEmail,
  createUser,
  getAllUsers,
};