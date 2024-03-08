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

const verify = (payload) => {
  const token = jwt.verify(payload, SECRET);
  return token;
};

module.exports = {
  create,
  verify,
};