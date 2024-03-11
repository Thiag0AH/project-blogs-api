const { BlogPost, User } = require('../models');
const jwtUtils = require('../utils/jwt.util');
const postValidation = require('./validations/post.vallidation');
const postCategories = require('./post_categories.service');

const insert = async (title, content, categoryIds, token) => {
  const categoryCheck = await postValidation.categoryValidation(categoryIds);
  if (categoryCheck.includes(false)) {
    return {
      data: { message: 'one or more "categoryIds" not found' },
      status: 400,
    };
  }
  const user = jwtUtils.verify(token);
  const result = await User.findOne({ where: { email: user.email } });
  const userId = result.id;
  const data = await BlogPost.create({ title, content, userId });
  await postCategories.create(categoryIds, data.id);
  return { data, status: 201 };
};

module.exports = {
  insert,  
};