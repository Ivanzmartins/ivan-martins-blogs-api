const express = require('express');

const postRouter = express.Router();

const { tokenExistAndValid } = require('../middlewares/tokenValidator');

const postController = require('../controllers/postController');

postRouter.get('/', tokenExistAndValid, postController.getAllPosts);

module.exports = postRouter;