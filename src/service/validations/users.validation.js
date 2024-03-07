const { User } = require('../../models');

const booleanReturn = { boolean: true };

const emailExist = async (email) => {
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
const insertValidation = async (email) => {
  const emailInUse = await emailExist(email);
  return emailInUse;
};

module.exports = {
  insertValidation,
};