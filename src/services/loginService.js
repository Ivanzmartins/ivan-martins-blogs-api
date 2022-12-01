// const { User } = require('../models');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }
};

module.exports = {
  loginUser,
};