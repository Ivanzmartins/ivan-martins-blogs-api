const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { token, status, message } = await
      userServices.createUser(displayName, email, password, image);
    if (message) return res.status(status).json({ message });

    return res.status(status).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};