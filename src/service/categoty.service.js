const { Category } = require('../models');

const insert = async (name) => {
  if (!name) {
    return { data: { message: '"name" is required' }, status: 400 };
  }
  const data = await Category.create({ name });
  return { data, status: 201 };
};

module.exports = {
  insert,
};