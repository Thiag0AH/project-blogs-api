const categoryService = require('../service/categoty.service');

const insert = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.insert(name);
  res.status(status).send(data);
};

const selectAll = async (req, res) => {
  const { status, data } = await categoryService.selectAll();
  res.status(status).send(data);   
};
  
module.exports = {
  insert,
  selectAll,
};