import {Router} from 'express';

import authMiddleware from '../middlewares/auth_middleware';

const routes = Router();

import {petController} from '../controllers';

routes.get('/', petController.index);
routes.get('/:id', petController.show);
routes.post('/', authMiddleware, petController.create);
routes.put('/:id', authMiddleware, petController.update);
routes.delete('/:id', authMiddleware, petController.delete);

export default routes;
