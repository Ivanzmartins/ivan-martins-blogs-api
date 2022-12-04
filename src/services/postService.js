const models = require('../models');

const getAllPosts = async () => {
  const posts = await models.BlogPost.findAll({
    include: [{ model: models.User, as: 'user' }],
  });
  return posts;
};

module.exports = {
  getAllPosts,
};
