const loginService = require('../service/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.login(email, password);
  res.status(status).send(data);
};

module.exports = {
  login,
};