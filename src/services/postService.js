const { BlogPost } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};

// const getAllPosts = async () => {
//   const posts = await models.BlogPost.findAll(
//     { 
//     include: [
//       { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: models.Category, as: 'categories', through: { attributes: [] } },
//     ],
//   }
//   );
//   return { status: 200, posts };
// };
module.exports = {
  getAllPosts,
};
