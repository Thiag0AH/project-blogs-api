const express = require('express');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/users.controller');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');
const userMiddleware = require('./middleware/user.middleware');
const postMiddleware = require('./middleware/posts.Middleware');
const { authorization } = require('./middleware/JWT.validate');
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

app.get('/user', authorization, userController.selectAll);

app.get('/user/:id', authorization, userController.selectById);

app.post(
  '/categories',
  authorization,
  categoryController.insert,
);

app.get('/categories', authorization, categoryController.selectAll);

app.post('/post', authorization, postMiddleware.insertValidation, postController.insert);

app.get('/post', authorization, postController.selectAll);

app.get('/post/:id', authorization, postController.selectById);

app.put('/post/:id', authorization, postMiddleware.updateValidation, postController.update);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
