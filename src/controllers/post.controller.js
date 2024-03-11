const postService = require('../service/post.service');

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}
  
const insert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);
  const { status, data } = await postService.insert(title, content, categoryIds, token);
  res.status(status).send(data);
};

const selectAll = async (req, res) => {
  const { status, data } = await postService.selectAll();
  res.status(status).send(data);
};

const selectById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.selectById(id);
  res.status(status).send(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);
  const { status, data } = await postService.update(token, id, { title, content });
  res.status(status).send(data);
};

module.exports = {
  insert,
  selectAll,
  selectById,
  update,
};