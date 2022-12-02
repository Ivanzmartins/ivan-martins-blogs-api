const { User } = require('../models');

const { createToken } = require('../auth/jwtFunctions');

const isBodyValid = (email, password) => email && password;

const loginUser = async (email, password) => {
  try {
    if (!isBodyValid(email, password)) {
      return { status: 400, message: 'Some required fields are missing' };
    }
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return { status: 400, message: 'Invalid fields' };
    }
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
    return { status: 200, token };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = {
  loginUser,
};