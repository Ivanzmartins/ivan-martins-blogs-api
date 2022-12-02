const express = require('express');

const userController = require('../controllers/userController');

const { userValidator, verifyUserAlreadyExists } = require('../middlewares/userValidator');

const userRouter = express.Router();

userRouter.post('/', userValidator, verifyUserAlreadyExists, userController.createUser);

module.exports = userRouter;