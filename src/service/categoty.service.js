const { Category } = require('../models');

const insert = async (name) => {
  if (!name) {
    return { data: { message: '"name" is required' }, status: 400 };
  }
  const data = await Category.create({ name });
  return { data, status: 201 };
};

const selectAll = async () => {
  const data = await Category.findAll();
  return { data, status: 200 };
};

module.exports = {
  insert,
  selectAll,
};