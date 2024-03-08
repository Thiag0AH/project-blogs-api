const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    }, {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    });
    return BlogPost;
}
