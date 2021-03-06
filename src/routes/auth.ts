import * as express from 'express';
import * as authController from '../controllers/auth';

const authRouter: express.Router = express.Router();


authRouter.get('/login', authController.getLogin);

export default authRouter;