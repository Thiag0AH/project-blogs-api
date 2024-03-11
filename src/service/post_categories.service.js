const { PostCategory } = require('../models');

const create = async (category, id) => {
  const array = [];
  for (let i = 0; i < category.length; i += 1) {
    array[i] = PostCategory.create({ postId: id, categoryId: category[i] });
  }
  Promise.all(array);
};

module.exports = {
  create,
};