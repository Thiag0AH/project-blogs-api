const userService = require('../service/users.service');

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService(displayName, email, password, image);
  res.status(status).send(data);
};

module.exports = {
  insert,
};