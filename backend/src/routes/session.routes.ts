import {Router} from 'express';

const routes = Router();

import {sessionController} from '../controllers';

routes.post('/', sessionController.create);

export default routes;
