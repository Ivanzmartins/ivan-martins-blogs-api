const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email, password) => email && password;

const loginUser = async (email, password) => {
  try {
    if (!isBodyValid(email, password)) {
      return { status: 400, message: 'Some required fields are missing' };
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { status: 400, message: 'Invalid fields' };
    }
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
    return { status: 200, token };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = {
  loginUser,
};