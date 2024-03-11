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

module.exports = {
  insert,
  selectAll,
};