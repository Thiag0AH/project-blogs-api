const { Category } = require('../../models');

const categoryValidation = async (categoryIds) => {
  const category = await Category.findAll();
  const booleans = [];
  const id = [];
  for (let i = 0; i < category.length; i += 1) {
    id.push(category[i].id);
  }
  for (let i = 0; i < categoryIds.length; i += 1) {
    const check = id.includes(categoryIds[i]);
    booleans.push(check);
  }
  return booleans;
};

module.exports = {
  categoryValidation,
};