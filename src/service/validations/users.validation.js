const { User } = require('../../models');

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

module.exports = {
  insertValidation,
};