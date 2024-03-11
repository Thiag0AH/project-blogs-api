const { BlogPost, User } = require('../models');
const jwtUtils = require('../utils/jwt.util');
const postValidation = require('./validations/post.vallidation');

const insert = async (title, content, categoryIds, token) => {
  const categoryCheck = await postValidation.categoryValidation(categoryIds);
  if (categoryCheck.includes(false)) {
    return {
      data: { message: 'one or more "categoryIds" not found' },
      status: 400,
    };
  }
  const user = jwtUtils.verify(token);
  const { email } = user;
  const { id } = await User.findOne({ where: { email } });
  const userId = id;
  const data = await BlogPost.create({ title, content, userId });
  return { data, status: 201 };
};

module.exports = {
  insert,  
};