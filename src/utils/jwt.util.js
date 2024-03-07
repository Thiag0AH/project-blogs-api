const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const create = (payload) => {
  console.log(SECRET);
  const token = jwt.sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '5d',
  });
  
  return token;
};

module.exports = {
  create,
};