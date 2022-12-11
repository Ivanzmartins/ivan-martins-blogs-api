const models = require('../models');

const getAllPosts = async () => {
  const posts = await models.BlogPost.findAll({
    include: [
      { 
        model: models.User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      {
        model: models.Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

module.exports = {
  getAllPosts,
};
