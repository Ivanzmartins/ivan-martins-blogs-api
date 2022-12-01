const BlogPost = (sequelize, DataTypes) => {

  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    content: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    published: {
      type: Datatypes.DATE, 
      allowNull: false,
    },
    updated: {
      type: Datatypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};