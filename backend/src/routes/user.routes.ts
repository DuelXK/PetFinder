import {Router} from 'express';

const routes = Router();

import {userController} from '../controllers';

routes.post('/', userController.create);

export default routes;