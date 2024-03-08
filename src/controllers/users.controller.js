const userService = require('../service/users.service');

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.insert(displayName, email, password, image);
  res.status(status).send(data);
};

const selectAll = async (req, res) => {
  const { status, data } = await userService.selectAll();
  res.status(status).send(data);
};

const selectById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.selectById(id);
  res.status(status).send(data);
};

module.exports = {
  insert,
  selectAll,
  selectById,
};