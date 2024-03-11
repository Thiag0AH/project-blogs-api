const { User } = require('../../models');
const jwtUtils = require('../../utils/jwt.util');

const booleanReturn = { boolean: true };
const insertValidation = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return booleanReturn;
  }
  return {
    data: { message: 'User already registered' },
    status: 409,
    boolean: false,
  };
};

const userValidation = async (token) => {
  const user = jwtUtils.verify(token);
  const result = await User.findOne({ where: { email: user.email } });
  const userId = result.id;
  return userId;
};

module.exports = {
  insertValidation,
  userValidation,
};