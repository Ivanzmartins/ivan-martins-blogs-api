const express = require('express');

const categoryRouter = express.Router();

const { tokenExistAndValid } = require('../middlewares/tokenValidator');

const categoryController = require('../controllers/categoryController');

categoryRouter.post('/', tokenExistAndValid, categoryController.createCategory);

module.exports = categoryRouter;