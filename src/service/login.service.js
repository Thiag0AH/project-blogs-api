const { User } = require('../models');
const jwt = require('../utils/jwt.util');

const login = async (email, password) => {
  if (!email || !password) {
    return { 
      data: { message: 'Some required fields are missing' },
      status: 400, 
    };
  }

  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return {
      data: { message: 'Invalid fields' }, 
      status: 400,
    };
  }
  const token = jwt.create({ email: user.email });
  return { data: { token }, status: 200 };
};

module.exports = {
  login,
};