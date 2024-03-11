const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    }, {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.Category, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            
        });
        models.BlogPost.belongsToMany(models.BlogPost, {
                as: 'categories',
                through: PostCategory,
                foreignKey: 'postId',
                otherKey: 'categoryId'
            });
    };
    

    return PostCategory;
}

module.exports = PostCategoryModel;