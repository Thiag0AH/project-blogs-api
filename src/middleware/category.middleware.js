const insertValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  insertValidation,
};