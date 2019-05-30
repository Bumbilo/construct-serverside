import * as express from 'express';
import * as authController from '../controllers/auth';

const authRouter = express.Router();

authRouter.get('/login', () => {

});

export { authRouter };