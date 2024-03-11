const insertValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }
  next();
};

const updateValidation = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  insertValidation,
  updateValidation,
};