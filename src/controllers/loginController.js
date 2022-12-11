const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { status, token, message } = await loginService.loginUser(email, password);
    if (message) return res.status(status).json({ message });
    return res.status(status).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
};
