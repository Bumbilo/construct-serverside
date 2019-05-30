import * as express from 'express';

const getLogin = (err: express.RequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: 'errorasdlfkjasd',
  });
};

export { getLogin };
