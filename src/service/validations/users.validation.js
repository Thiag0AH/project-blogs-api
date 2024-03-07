const { User } = require('../../models');

const booleanReturn = { boolean: true };

const emailExist = async (email) => {
  const user = User.findOne({ where: email });
  if (!user) {
    return booleanReturn;
  }
  return {
    data: { message: 'User already registered' },
    status: 400,
    boolean: false,
  };
};
const insertValidation = async (email) => {
  const emailInUse = await emailExist(email);
  if (emailInUse.boolean === false) {
    return emailInUse;
  }
};

module.exports = {
  insertValidation,
};