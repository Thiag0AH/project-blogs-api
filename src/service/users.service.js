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
  return { data: { token }, status: 200 };
};

module.exports = {
  insert,
};