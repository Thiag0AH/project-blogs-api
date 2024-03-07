const express = require('express');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/users.controller');
const userMiddleware = require('./middleware/user.middleware');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.post('/login', loginController.login);

app.post('/user', userMiddleware.insertMiddleware, userController.insert);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
