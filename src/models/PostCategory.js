const BlogPost = require('./BlogPost');
const Category = require('./Category');

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      foreingKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      foreingKey: true,
    },
  },
    {
      timestamps: false,
      underscored: true,
    });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  }; 
  return PostCategory;
};

module.exports = PostCategory;