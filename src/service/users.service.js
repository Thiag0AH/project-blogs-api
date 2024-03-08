const { User } = require('../models');
const jwt = require('../utils/jwt.util');
const { insertValidation } = require('./validations/users.validation');

const insert = async (displayName, email, password, image) => {
  const validation = await insertValidation(email);
  if (validation.boolean === false) {
    return { data: validation.data, status: validation.status };
  }
  if (!image) {
    await User.create({ displayName, email, password });
  } else {
    await User.create({ displayName, email, password, image });
  }
  
  const token = jwt.create({ email });
  return { data: { token }, status: 201 };
};

const selectAll = async () => {
  const data = [];
  const users = await User.findAll();
  for (let index = 0; index < users.length; index += 1) {
    const { id, displayName, email, image } = users[index];
    data.push({
      id,
      displayName,
      email,
      image,
    });
  }
  return { data, status: 200 };
};

module.exports = {
  insert,
  selectAll,
};