import * as express from 'express';

const getLogin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: 'errorasdlfkjasd',
  });
};

export { getLogin };
