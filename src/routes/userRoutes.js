const express = require('express');

const userController = require('../controllers/userController');

const { userValidator, verifyUserAlreadyExists } = require('../middlewares/userValidator');

const { tokenExistAndValid } = require('../middlewares/tokenValidator');

const userRouter = express.Router();

userRouter.post('/', userValidator, verifyUserAlreadyExists, userController.createUser);

userRouter.get('/:id', tokenExistAndValid, userController.getUserById);

userRouter.get('/', tokenExistAndValid, userController.getAllUsers);

module.exports = userRouter;