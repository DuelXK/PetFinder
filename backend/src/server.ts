import express from 'express';
import cors from 'cors';

import routes from './routes';
import {loggerMiddleware} from './middlewares';

const server = express();

server.use(cors());
server.use(express.json());
server.use(loggerMiddleware);
server.use('/api/v1', routes);

export default server;
