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
  const data = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return { data, status: 200 };
};

const selectById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return { data: { message: 'User does not exist' }, status: 404 };
  }
  const { displayName, email, image } = user;
  const data = {
    id: user.id,
    displayName,
    email,
    image,
  };
  return { data, status: 200 };
};

module.exports = {
  insert,
  selectAll,
  selectById,
};