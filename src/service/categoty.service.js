const { Category } = require('../models');

const insert = async (name) => {
  const data = await Category.create({ name });
  return { data, status: 201 };
};

module.exports = {
  insert,
};