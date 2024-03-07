const booleanReturn = { boolean: true };

const nameLength = (displayName) => {
  if (displayName.length < 8) {
    return {
      data: { message: 'displayName length must be at least 8 characters long' },
      status: 400,
      boolean: false,
    };
  }
  return booleanReturn;
};
const emailRegex = (email) => {
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const emaiCheck = regex.test(email);
  if (!emaiCheck) {
    return { 
      data: { message: 'email must be a valid email' },
      status: 400,
      boolean: false,
    };
  }
  return booleanReturn;
};
const passwordLength = (password) => {
  if (password.length < 6) {
    return {
      data: { message: 'password length must be at least 6 characters long' },
      status: 400,
      boolean: false,
    };
  }
  return booleanReturn;
};

const insertMiddleware = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const nameValidation = nameLength(displayName);
  if (nameValidation.boolean === false) {
    return res.status(nameValidation.status).send(nameValidation.data);
  }
  const emailValidation = emailRegex(email);
  if (emailValidation.boolean === false) {
    return res.status(emailValidation.status).send(nameValidation.data);
  }
  const passLength = passwordLength(password);
  if (passLength.boolean === false) {
    return res.status(passLength.status).send(nameValidation.data);
  }
  next();
};

module.exports = {
  insertMiddleware,
};