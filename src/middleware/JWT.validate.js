// src/auth/validateJWT.js
const jwtUtils = require('../utils/jwt.util');
const { insertValidation } = require('../service/validations/users.validation');

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const authorization = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(bearerToken);
  try {
    const payload = jwtUtils.verify(token);
    const user = await insertValidation(payload.email);
    if (user.boolean === true) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  authorization,
};