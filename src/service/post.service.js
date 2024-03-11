const { BlogPost, User, Category } = require('../models');
const postValidation = require('./validations/post.vallidation');
const { userValidation } = require('./validations/users.validation');
const postCategories = require('./post_categories.service');

const include = [{ 
  model: User,
  as: 'user',
  attributes: ['id', 'displayName', 'email', 'image'] }, 
{ model: Category, as: 'categories' }];
const insert = async (title, content, categoryIds, token) => {
  const categoryCheck = await postValidation.categoryValidation(categoryIds);
  if (categoryCheck.includes(false)) {
    return {
      data: { message: 'one or more "categoryIds" not found' },
      status: 400,
    };
  }
  const userId = await userValidation(token);
  const data = await BlogPost.create({ title, content, userId });
  await postCategories.create(categoryIds, data.id);
  return { data, status: 201 };
};

const selectAll = async () => {
  const data = await BlogPost.findAll({
    include,
  });
  return { data, status: 200 };
};

const selectById = async (id) => {
  const data = await BlogPost.findOne({ 
    where: { id },
    include,
  });
  if (!data) {
    return { data: { message: 'Post does not exist' }, status: 404 };
  }
  return { data, status: 200 };
};

const update = async (token, id, { title, content }) => {
  const logId = await userValidation(token);
  const data = await BlogPost.findOne({ 
    where: { id },
    include,
  });
  if (data.userId !== logId) {
    return { data: { message: 'Unauthorized user' }, status: 401 };
  }
  await data.update({ title, content });
  await data.save();
  return { data, status: 200 };
};

module.exports = {
  insert,
  selectAll,
  selectById,
  update,
};