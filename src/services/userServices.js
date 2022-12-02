const { User } = require('../models');

const { createToken } = require('../auth/jwtFunctions');

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image = '') => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token, status: 201 };
};

module.exports = {
  getUserByEmail,
  createUser,
};